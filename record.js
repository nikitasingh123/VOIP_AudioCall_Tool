let mediaRecorder;
let recordedBlobs;

const audio = document.querySelector('audio#localstream');
const errorMsgElement = document.querySelector('span#errorMsg');
const recordedAudio = document.querySelector('audio#recorded');
const recordButton = document.querySelector('button#record');

const constraints = window.constraints = {
  audio: true,
  video: false
};

function handleSuccess(stream) {
  const audioTracks = stream.getAudioTracks();
  console.log('Got stream with constraints:', constraints);
  console.log('Using audio device: ' + audioTracks[0].label);
  stream.oninactive = function() {
    console.log('Stream ended');
  };
  window.stream = stream; // make variable available to browser console
  audio.srcObject = stream;
  recordButton.disabled = false;  //enable start recording button
}

function handleError(error) {
  const errorMessage = 'navigator.MediaDevices.getUserMedia error: ' + error.message + ' ' + error.name;
  errorMsgElement.innerHTML = errorMessage;
  console.log(errorMessage);
}

navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);

recordButton.addEventListener('click', () => {
  if (recordButton.textContent === 'Start Recording') {
    startRecording();
  } else {
    stopRecording();
    recordButton.textContent = 'Start Recording';
    playButton.disabled = false;       //enable play button
    downloadButton.disabled = false;   //enable download button
  }
});

const playButton = document.querySelector('button#play');
playButton.addEventListener('click', () => {
  const superBuffer = new Blob(recordedBlobs, {type: 'audio/wav'});
  recordedAudio.src = null;
  recordedAudio.srcObject = null;
  recordedAudio.src = window.URL.createObjectURL(superBuffer);
  recordedAudio.controls = true;
  recordedAudio.play();
});

const downloadButton = document.querySelector('button#download');
downloadButton.addEventListener('click', () => {
  const audioblob = new Blob(recordedBlobs, {type: 'audio/wav'});
  const url = window.URL.createObjectURL(audioblob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'recording.wav';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 100);
});

function handleDataAvailable(event) {
  console.log('handleDataAvailable', event);
  if (event.data && event.data.size > 0) {
    recordedBlobs.push(event.data);
  }
}

function startRecording() {
  recordedBlobs = [];
  let options = {mimeType: 'audio/wav;codecs=opus'};
  if (!MediaRecorder.isTypeSupported(options.mimeType)) {
    console.error(`${options.mimeType} is not supported`);
      options = {mimeType: 'audio/wav'};
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.error(`${options.mimeType} is not supported`);
        options = {mimeType: ''};
      }
    }
  
  try {
    mediaRecorder = new MediaRecorder(window.stream, options);
  } catch (e) {
    console.error('Exception while creating MediaRecorder:', e);
    errorMsgElement.innerHTML = `Exception while creating MediaRecorder: ${JSON.stringify(e)}`;
    return;
  }

  console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
  recordButton.textContent = 'Stop Recording';
  playButton.disabled = true;
  downloadButton.disabled = true;
  mediaRecorder.onstop = (event) => {
    console.log('Recorder stopped: ', event);
    console.log('Recorded Blobs: ', recordedBlobs);
  };
  mediaRecorder.ondataavailable = handleDataAvailable;
  mediaRecorder.start();
  console.log('MediaRecorder started', mediaRecorder);
 }

function stopRecording() {
  mediaRecorder.stop();
}
