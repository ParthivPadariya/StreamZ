import React, { useEffect, useState, useRef } from 'react'

import { useMeeting, Constants } from '@videosdk.live/react-sdk'
import SpeakerView from './SpeakerView'
import ViewerView from './ViewerView.js'

import '../style/container.css'


const Container = (props) => {
    const [joined, setJoined] = useState(null);

    const { join } = useMeeting();
    const mMeeting = useMeeting({
        onMeetingJoined: () => {
            if (mMeetingRef.current.localParticipant.mode === "CONFERENCE") {
                mMeetingRef.current.localParticipant.pin();
            }
            setJoined("JOINED");
        },

        onMeetingLeft: () => {
            props.onMeetingLeave();
        },

        onError: (error) => {
            alert(error.message);
        },
    });
    const joinMeeting = () => {
        setJoined("JOINING");
        join();
    };
    const mMeetingRef = useRef(mMeeting);
    useEffect(() => {
        mMeetingRef.current = mMeeting;
    }, [mMeeting]);

    return (
        <div className="MeetingContainer">
            <h3 className='meeting-header' style={{zIndex:10}}>Meeting Id: {props.meetingId}</h3>
            <div className='metting-data'>
                {joined && joined === "JOINED" ? (
                    mMeeting.localParticipant.mode === Constants.modes.CONFERENCE ? (
                        <SpeakerView/>
                    ) : mMeeting.localParticipant.mode === Constants.modes.VIEWER ? (
                        <ViewerView/>
                    ) : null
                ) : joined && joined === "JOINING" ? (
                    <p style={{zIndex:10}}>Joining the meeting...</p>
                ) : (
                    <button className='button' style={{zIndex:10}} onClick={joinMeeting}>Join</button>
                )}
            </div>

        </div>);
}

export default Container
