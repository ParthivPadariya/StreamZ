import React from 'react'
import { useMeeting } from '@videosdk.live/react-sdk'

const MeetingView = () => {
    const { startLivestream, stopLivestream } = useMeeting();
    const handleStartLiveStream = () => {
        startLivestream(
            [
                {
                    url: "rtmp://a.rtmp.youtube.com/live2",
                    streamKey: "18ec-64v4-zmra-z89v-059z",
                },
                {
                    url: "rtmp://live.twitch.tv/app/",
                    streamKey: "live_951038856_NlDQVQfu3vZteA7kDQfNRJ75Ou2rcL"
                }
            ],
            {
                layout: {
                    type: "GRID",
                    priority: "SPEAKER",
                    gridSize: 4,
                },
                theme: "DARK",
            }
        )

    }

    const handleStopLivestream = () => {
        stopLivestream();
    };
    return (
        <>
            <div style={{zIndex:10}}>
                <button style={{zIndex:15, position:"relative"}} onClick={handleStartLiveStream}>Start Live Stream</button><br />
                <button style={{zIndex:15, position:"relative"}} onClick={handleStopLivestream}>Stop Live Stream</button>
            </div>
        </>
    )
}

export default MeetingView
