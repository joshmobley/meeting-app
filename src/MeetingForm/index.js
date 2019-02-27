import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { AccessTime } from '@material-ui/icons'

const MeetingForm = () => {

    const [title, updateTitle] = useState();
    const [startDate, updateStartDate] = useState(Date.now());
    const [endDate, updateEndDate] = useState(Date.now());
    const [startTime, updateStartTime] = useState(Date.now());
    const [endTime, updateEndTime] = useState(Date.now());
    const [meetingCreated, updateMeetingCreated] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        axios('//localhost:3000/meeting', {
            method: 'POST',
            data: {
                title,
                start_time: startTime,
                end_time: endTime,
                start_date: startDate
            },
            withCredentials: true
        }).then( res => updateMeetingCreated(true)).catch( err => console.log(err) )
    }
    
    return (
        
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form onSubmit={ e => handleSubmit(e) }>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={ title } onChange={ e => updateTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" id="description" />
            </div>
            <div>
                <label htmlFor="description">Select Day</label>
                <DatePicker keyboard value={startDate} disablePast onChange={e => updateStartDate(e) } />
            </div>
            <div>
                <label htmlFor="start_time">Start Time</label>
                <TimePicker keyboard value={startTime} keyboardIcon={ <AccessTime /> } disablePast onChange={e => {updateStartTime(e); updateEndTime(e);} } />
            </div>
            <div>
                <label htmlFor="end_time">End Time</label>
                <TimePicker keyboard value={endTime} keyboardIcon={ <AccessTime /> } disablePast start={ startTime } onChange={e => updateEndTime(e)} />
            </div>
            <button type="submit">Save</button>
            <Link to="/">Cancel</Link>
        </form>
        { meetingCreated && <Redirect to="/" />}
    </MuiPickersUtilsProvider>
    )
}

export default MeetingForm;