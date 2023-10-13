import React,{useState,useContext} from 'react'
import '../style/JoinScreen.css'
import {userName} from '../context/username.js'

const JoinScreen = ({ getMeetingAndToken, setMode }) => {
    const [meetingId, setMeetingId] = useState(null);
    const user = useContext(userName);


    const onClick = async (mode) => {
        setMode(mode);
        await getMeetingAndToken(meetingId);
    };
    return (
        <>
        <div className='main-container'>
            <div className='container'>
                <div className='title'>
                   <h1>StreamZ</h1>
                    <center><p>Elevate your Entertainment : Every Moment is Live with StreamZ</p></center>
                </div>
                <div className='input-section'>
                    <input type="text" value={user.user} style={{marginBottom:"20px"}} placeholder='Enter User Name' onChange={(e) => {user.setUser(e.target.value)}}/>
                    
                    <center><button className='button-85' onClick={() => onClick("CONFERENCE")}>Create Meeting</button></center><br/>
                    <center>{ " or "}</center><br/>
                    <center><input type="text" onChange={(e) => setMeetingId(e.target.value)} placeholder='Enter Meeting Id' /></center><br/>
                    <center><button className='button-85' onClick={() => onClick("CONFERENCE")}>Join</button>
                    
                    </center>
                </div>
            </div>
        </div>
        </>
        // <div className="container">
        //     <button onClick={() => onClick("CONFERENCE")}>Create Meeting</button>
        //     <br />
        //     <br />
        //     {" or "}
        //     <br />
        //     <br />
        //     <input
        //         type="text"
        //         placeholder="Enter Meeting Id"
        //         onChange={(e) => {
        //             setMeetingId(e.target.value);
        //         }}
        //     />
        //     <br />
        //     <br />
        //     <button onClick={() => onClick("CONFERENCE")}>Join as Host</button>
        //     {" | "}
        //     <button onClick={() => onClick("VIEWER")}>Join as Viewer</button>
        // </div>
    );
}

export default JoinScreen
