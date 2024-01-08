import React from 'react'
import { useMeeting } from '@videosdk.live/react-sdk'

const MeetingView = () => {
    const { startLivestream, stopLivestream } = useMeeting();
    const handleStartLiveStream = () => {
        startLivestream(
            [
                {
                    url: "rtmp_url",
                    streamKey: "stream_key",
                },
                {
                    url: "rtmp_url",
                    streamKey: "stream_key"
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
