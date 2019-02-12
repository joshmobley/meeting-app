import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateMeetings, updateUser } from '../actions';
import MeetingList from '../MeetingList';

const ConnectHome = ({ meetings, user, updateUser, updateMeetings }) => {

  useEffect( () => {
      axios.get('//localhost:3000/meeting', { withCredentials: true }).then( res =>
        updateMeetings(res.body)
      )
  })

  const logout = () => {
    axios.get('//localhost:3000/auth/logout', { withCredentials: true }).then( res => 
        updateUser({})
    ).catch( err => console.log(err));
  }

  return (
      <div>
        <button onClick={ e => logout(e) }>Log Out</button>
        <h2>Meetings</h2>
        { meetings && <MeetingList meetings={meetings} /> }
        <Link to="/meetings/new"><button>New Meeting</button></Link>
      </div>
  )
}

const mapStateToProps = state => {
    return { 
        meetings: state.meetings,
        user: state.user 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateMeetings: meetings => dispatch(updateMeetings(meetings)),
        updateUser: user => dispatch(updateUser(user))
    }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(ConnectHome);

export default Home;