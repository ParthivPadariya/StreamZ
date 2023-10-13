
import React, { useState } from "react";
import { authToken, createMeeting } from "./API";
import {MeetingProvider,MeetingConsumer} from '@videosdk.live/react-sdk'
import Container from './component/Container'
import JoinScreen from './component/JoinScreen'
import Box from './component/Box.js'

function App() {
  const [meetingId, setMeetingId] = useState(null);

  //State to handle the mode of the participant i.e. CONFERNCE or VIEWER
  const [mode, setMode] = useState("CONFERENCE");

  //Getting MeetingId from the API we created earlier
  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  return (
    <>
    <div style={{position:"absolute"}}>
    {
      authToken && meetingId ? (
        <MeetingProvider
        config={{
          meetingId,
          micEnabled: true,
          webcamEnabled: true,
          name: "C.V. Raman",
          //These will be the mode of the participant CONFERENCE or VIEWER
          mode: mode,
        }}
        token={authToken}
        >
        <MeetingConsumer>
          {() => (
            <Container meetingId={meetingId} onMeetingLeave={onMeetingLeave} /> 
            )}
        </MeetingConsumer>
      </MeetingProvider>
    ) : (
      <JoinScreen getMeetingAndToken={getMeetingAndToken} setMode={setMode} />
      )
      
    }
    </div>
    <Box/>
    </>
  );
}

export default App;
