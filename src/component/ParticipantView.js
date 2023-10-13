import React,{useRef, useEffect,useMemo} from 'react'

import ReactPlayer from "react-player";
import {useParticipant} from '@videosdk.live/react-sdk'

import '../style/Participate.css'

const ParticipantView = (props) => {
    const micRef = useRef(null);
    const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } = useParticipant(props.participantId);

    const videoStream = useMemo(() => {
        if (webcamOn && webcamStream) {
            const mediaStream = new MediaStream();
            mediaStream.addTrack(webcamStream.track);
            return mediaStream;
        }
    }, [webcamStream, webcamOn]);

    useEffect(() => {
        if (micRef.current) {
            if (micOn && micStream) {
                const mediaStream = new MediaStream();
                mediaStream.addTrack(micStream.track);

                micRef.current.srcObject = mediaStream;
                micRef.current
                    .play()
                    .catch((error) =>
                        console.error("videoElem.current.play() failed", error)
                    );
            } else {
                micRef.current.srcObject = null;
            }
        }
    }, [micStream, micOn]);

    return (
    <div className='video-player'>
        <p style={{width:"max-content"}}>
            Participant : {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic:{" "}
            {micOn ? "ON" : "OFF"}
        </p>
        <audio ref={micRef} autoPlay playsInline muted={isLocal} />
        {webcamOn && (
            <ReactPlayer
                playsinline
                pip={false}
                light={false}
                controls={false}
                muted={true}
                playing={true}

                url={videoStream}

                height={"300px"}
                width={"300px"}
                onError={(err) => {
                    console.log(err, "paricipant video error");
                }}
            />
        )}
    </div>
    );
}

export default ParticipantView
