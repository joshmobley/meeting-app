import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateMeetings, updateUser } from '../actions';
import MeetingList from '../MeetingList';

const ConnectHome = ({ meetings, user, updateUser, updateMeetings }) => {

  useEffect( () => {
      axios.get('//localhost:3000/meeting', { withCredentials: true }).then( res => 
        updateMeetings(res.data)
      )
  }, [])

  return (
      <div>
        <h2>Meetings</h2>
        { meetings && <MeetingList meetings={meetings} /> }
        <Link to="/meetings/new"><button>New Meeting</button></Link>
      </div>
  )
}

const mapStateToProps = state => {
    return { 
        meetings: state.meetings
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateMeetings: meetings => dispatch(updateMeetings(meetings))
    }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(ConnectHome);

export default Home;