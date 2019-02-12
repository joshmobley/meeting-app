import React from 'react';

const MeetingList = ({ meetings }) => (
    meetings.map( meeting => (
        <p>{ meeting.title } </p>
    ))
)

export default MeetingList;