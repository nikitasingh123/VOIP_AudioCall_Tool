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
        * Function Name       Return Type         Parameters
        * handleSuccess       none                stream       
        * handleError         none                error  
