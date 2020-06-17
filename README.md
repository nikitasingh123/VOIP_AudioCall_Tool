# VoIP_Webrtc_Tool
### An end-to-end VoIP web application using webrtc framework including functionality to change data stream constraints.

#### Description about different files:
File Names | Purpose | Modularity
---------------- | ------------- | --------------- 
Stream_Audio.html | To test local audio stream | get local audio stream using **getUserMedia** API
audiocall.html, main.js| Establish peer-to-peer audio connection | call, select codec, create offer, answer, hangup
RecordAudio_and_Download.html, record.js | To record, play and download local audio stream | record, play, download modules
P2P_LocalAudio_Recording.html, local_p2p_record.js | Establish peer-to-peer audio connection and record, play, download the local stream | all above modules
P2P_RemoteAudio_Recording.html, remote_p2p_record.js | Establish peer-to-peer audio connection and record, play, download the remote stream | all above modules


1-> Peer-to-Peer Audio Connection files - 
2-> Demo file  - 
3->  - 
4->  - 
5-> To establish peer-to-peer audio connection & record, download the remote stream - 
