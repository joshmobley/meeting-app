import React from 'react';
import { Link } from 'react-router-dom';

const MeetingList = ({ meetings }) => { 
    console.log(meetings);
return (
    
    meetings.map( meeting => (
        <p><Link to={`/meeting/${meeting._id}`}>{ meeting.title }</Link> { meeting.start_time } - { meeting.created_by.name } </p> 
    ))
)}

export default MeetingList;