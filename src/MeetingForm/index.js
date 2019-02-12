import React from 'react';

const MeetingForm = () => {
    
    return (
        <form>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" id="description" />
            </div>
            <div>
                <label htmlFor="start_time">Start Time</label>
                <input type="text" id="start_time" />
            </div>
            <div>
                <label htmlFor="end_time">End Time</label>
                <input type="text" id="end_time" />
            </div>
            <button type="submit">Save</button>
        </form>
    )
}

export default MeetingForm;