import React, { useState } from 'react'

import { useMeeting } from '@videosdk.live/react-sdk'

const Controls = () => {
    const { leave, toggleMic, toggleWebcam } = useMeeting();
    const [mic,setmic] = useState(0);
    const [webToggle,setWebToggle] = useState(0);

    const micToggle = () => {
        setmic(!mic);
        toggleMic();
    }
    const webCamToggle = () => {
        setWebToggle(!webToggle);
        toggleWebcam();
    }
    return (
        <div style={{zIndex:10, display:"flex", alignContent:"center", justifyContent:"center"}}>
            <svg style={{cursor:"pointer",zIndex:11 ,marginRight:"20px"}} onClick={() => leave()} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.347 7.116a.5.5 0 0 1 .704.064l2.083 2.5a.5.5 0 0 1-.768.64l-2.083-2.5a.5.5 0 0 1 .064-.704Z"/><path d="M15.347 12.884a.5.5 0 0 1-.064-.704l2.083-2.5a.5.5 0 1 1 .768.64l-2.083 2.5a.5.5 0 0 1-.704.064Z"/><path d="M17.5 10a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1 0-1H17a.5.5 0 0 1 .5.5Zm-14-7a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5Zm0 14a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5Z"/><path d="M13 2.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5Zm0 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5Zm-9-10a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5Z"/></g></svg>
            {
                mic ? <svg style={{cursor:"pointer", zIndex:11, marginRight:"20px"}} onClick={() => micToggle()} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16"><g fill="currentColor"><path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/><path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"/></g></svg>    
                : <svg style={{cursor:"pointer",zIndex:11, marginRight:"20px"}} onClick={() => micToggle()} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16"><g fill="currentColor"><path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879l-1-1V3a2 2 0 0 0-3.997-.118l-.845-.845A3.001 3.001 0 0 1 11 3z"/><path d="m9.486 10.607l-.748-.748A2 2 0 0 1 6 8v-.878l-1-1V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253l12 12l.708-.708l-12-12l-.708.708z"/></g></svg>
            }
            
            {
                webToggle ? <svg style={{cursor:"pointer", zIndex:11,marginRight:"20px"}} onClick={() => webCamToggle()} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175l3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/></svg>
                : <svg style={{cursor:"pointer",zIndex:11, marginRight:"20px"}} onClick={() => webCamToggle()} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l.714 1H9.5a1 1 0 0 1 1 1v6a1 1 0 0 1-.144.518l.605.847zM1.428 4.18A.999.999 0 0 0 1 5v6a1 1 0 0 0 1 1h5.014l.714 1H2a2 2 0 0 1-2-2V5c0-.675.334-1.272.847-1.634l.58.814zM15 11.73l-3.5-1.555v-4.35L15 4.269v7.462zm-4.407 3.56l-10-14l.814-.58l10 14l-.814.58z"/></svg>
            }
            {/* &emsp;|&emsp; */}
            {/* <button
                onClick={() => {
                    startHls({
                        layout: {
                            type: "SPOTLIGHT",
                            priority: "PIN",
                            gridSize: "20",
                        },
                        theme: "LIGHT",
                        mode: "video-and-audio",
                        quality: "high",
                        orientation: "landscape",
                    });
                }}>Start HLS</button>
            <button onClick={() => stopHls()}>Stop HLS</button> */}
        </div>
    );
}

export default Controls
