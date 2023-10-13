// import React,{ useRef,useEffect } from 'react'
// import {useMeeting} from '@videosdk.live/react-sdk'
import MeetingView from './MeetingView.js'
// import Hls from "hls.js";

const ViewerView = () => {
    // const playerRef = useRef(null);

    // const { hlsUrls, hlsState } = useMeeting();

    // useEffect(() => {
    //     if (hlsUrls.downstreamUrl && hlsState === "HLS_PLAYABLE") {
    //         if (Hls.isSupported()) {
    //             const hls = new Hls({
    //                 capLevelToPlayerSize: true,
    //                 maxloadingDelay: 4,
    //                 minAutoBitrate: 0,
    //                 autoStartLoad: true,
    //                 defaultAudioCodec: "mp4a.40.2",
    //             });

    //             let player = document.querySelector("#hlsPlayer");

    //             hls.loadSource(hlsUrls.downstreamUrl);
    //             hls.attachMedia(player);
    //         } else {
    //             if (typeof playerRef.current?.play === "function") {
    //                 playerRef.current.src = hlsUrls.downstreamUrl;
    //                 playerRef.current.play();
    //             }
    //         }
    //     }
    // }, [hlsUrls, hlsState, playerRef.current]);

    return (
        <div>
            
            {/* <div>
                {hlsState !== "HLS_PLAYABLE" ? (
                    <div>
                        <p> HLS has not started yet or is stopped</p>
                    </div>
                ) : (
                    hlsState === "HLS_PLAYABLE" && (
                        <div>
                            <video
                                ref={playerRef}
                                id="hlsPlayer"
                                autoPlay={true}
                                controls
                                playsinline
                                playsInline
                                muted={true}
                                playing
                                onError={(err) => {
                                    console.log(err, "hls video error");
                                }}
                            ></video>
                        </div>
                    )
                )}
            </div> */}
            
            <MeetingView />

        </div>
    );
}

export default ViewerView
