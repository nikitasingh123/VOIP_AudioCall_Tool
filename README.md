# VoIP_Webrtc_Tool
### An end-to-end VoIP web application using webrtc framework including functionality to change data stream constraints.


#### Description about all the files:
File Names | Purpose | Modularity
---------------- | ------------- | --------------- 
Stream_Audio.html | To test local audio stream | get local audio stream using **getUserMedia** API
audiocall.html, main.js| Establish peer-to-peer audio connection | call, select codec, create offer, answer, hangup
RecordAudio_and_Download.html, record.js | To record, play and download local audio stream | record, play, download modules
P2P_LocalAudio_Recording.html, local_p2p_record.js | Establish peer-to-peer audio connection and record, play, download the local stream | all above modules
P2P_RemoteAudio_Recording.html, remote_p2p_record.js | Establish peer-to-peer audio connection and record, play, download the remote stream | all above modules

*Files mentioned together(html and javascript) are to be run together on web browser(use Chrome as it supports all latest features of **WebRTC**)*

### Description about functions used in javascript Files :
#### [Stream_Audio.html](https://github.com/SRIDOutsideProjects/VoIP_Webrtc_Tool/blob/Code/Stream_Audio.html)

```javascript
function handleSuccess(stream) {
}
```
* Return Type - None
* Parameter - stream 
* Purpose - stream local audio into audio element, if **getUserMedia** API gets local audio 


```javascript
function handleError(error) {
}
```
* Return Type - None
* Parameter - error 
* Purpose - give error message to console, if **getUserMedia** API doesn't get local audio 

#### [main.js](https://github.com/SRIDOutsideProjects/VoIP_Webrtc_Tool/blob/Code/main.js)

```javascript
function gotStream(stream) {
}
```
* Return Type - None
* Parameter - stream 
* Purpose - get local stream and create an offer using **createOffer** constructor

```javascript
function call() {
}
```
* Return Type - None
* Parameter - None 
* Purpose - initiates a call event by establishing peer connection using **RTCPeerConnection** interface

```javascript
function gotDescription1(desc) {
}
```
* Return Type - pc2.createAnswer()
* Parameter - desc
* Purpose - set local description by chosing audio codec and set default codec for remote user by calling function gotDescription2

```javascript
function gotDescription2(desc) {
}
```
* Return Type - None
* Parameter - desc
* Purpose - set remote description by chosing audio codec 

```javascript
function hangup() {
}
```
* Return Type - None
* Parameter - None 
* Purpose - closes the event call and stops audio stream tracks

```javascript
function gotRemoteStream(e) {
}
```
* Return Type - None
* Parameter - e   //remote stream 
* Purpose - get remote stream from other user

```javascript
function onIceCandidate(pc, event) {
}
```
* Return Type - None
* Parameters - pc, event
* Purpose - gets remote user ICE server to establish connection


```javascript
function maybePreferCodec(sdp, type, dir, codec) {
}
```
* Return Type - sdp (after chosing codec)
* Parametesr - sdp (default), type (audio), dir (send), codec (value)
* Purpose - returns sdp after selecting a particular codec

```javascript
function findLineInRange(sdpLines, startLine, endLine, prefix, substr) {
}
```
* Return Type - index of line in sdpLines starting with prefix and containing substring, null otherwise
* Parametesr - sdpLines, startLine, endLine, prefix, substr
* Purpose - Find the line in sdpLines[startLine....endLine - 1] that starts with |prefix| and, if specified, contains |substr|.

```javascript
function getCodecPayloadType(sdpLine)  {
}
```
* Return Type - matched sdpLine
* Parametesr - sdpLine
* Purpose - Gets the codec payload type from an a=rtpmap:X line

```javascript
function setDefaultCodec(mLine, payload)  {
}
```
* Return Type - Returns a new m= line with the specified codec as the first one.
* Parametesr - sdpLine
* Purpose - to set the first codec as default codec 

#### [record.js](https://github.com/SRIDOutsideProjects/VoIP_Webrtc_Tool/blob/Code/record.js)

```javascript
function handleDataAvailable(event) {
}
```
* Return Type - None
* Parametesr - event
* Purpose - pushes the data of event(play, record or download) in recordedBlobs array

```javascript
function startRecording() {
}
```
* Return Type - None
* Parametesr - None
* Purpose - starts recording the available audio stream to console using **MediaRecorder** API with suported mimeType. Calls the methods for playing and downloading after onclick event.

```javascript
function stopRecording() {
}
```
* Return Type - None
* Parametesr - None
* Purpose - stops **MediaRecorder** API i.e. recording stops

#### Methods used :

```javascript
recordButton.addEventListener(){
}
```
* Purpose - on clicking record button calls startRecording() function and changes text of button to 'Stop Recording';on clicking again calls startRecording() function.

```javascript
playButton.addEventListener(){
}
```
* Purpose - on clicking play button makes the recoredaudio stream available to an audio element and plays it

```javascript
downloadButton.addEventListener(){
}
```
* Purpose - on clicking download button, it saves the recoredaudio stream in a recording.wav file and downloads it

#### [local_p2p_record.js](https://github.com/SRIDOutsideProjects/VoIP_Webrtc_Tool/blob/Code/local_p2p_record.js)

**All the functions, constructors or methods used in this file are already mention in *main.js* and *record.js* files**
