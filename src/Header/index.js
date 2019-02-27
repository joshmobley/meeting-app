import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../actions';
import './Header.scss';




const ConnectHeader = ({ user, updateUser }) => {
    
const logout = () => {
    axios.get('//localhost:3000/auth/logout', { withCredentials: true }).then( res => 
        updateUser({})
    ).catch( err => console.log(err));
  }
  
  return (
        <div className="header">
            <h1>Clearer Meetings</h1>
            { user.email && <button className="button" onClick={ e => logout(e) }>Log Out</button> }
        </div>
)
  }

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: user => dispatch(updateUser(user))
    }
}

const Header = connect(mapStateToProps, mapDispatchToProps)(ConnectHeader);

export default Header;