import React, { useMemo } from 'react'

import { useMeeting, Constants } from '@videosdk.live/react-sdk'
import MeetingView from './MeetingView'
import Controls from './Controls'
import ParticipantView from './ParticipantView'

import '../style/Viewer.css'

const SpeakerView = () => {
    const { participants } = useMeeting();

    const speakers = useMemo(() => {
        const speakerParticipants = [...participants.values()].filter(
            (participant) => {
                return participant.mode === Constants.modes.CONFERENCE;
            }
        );
        return speakerParticipants;
    }, [participants]);
    return (
        <div className='meeting'>
            <center><MeetingView /></center>
            
            {/* <p>Current HLS State: {hlsState}</p> */}
            <div className='video-view'>
                {
                    speakers.map((participant) => (
                        <ParticipantView participantId={participant.id} key={participant.id} />
                        ))
                }
            </div>
            <Controls />

        </div>
    );
}

export default SpeakerView
