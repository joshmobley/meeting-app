import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { updateUser } from './actions';

import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import MeetingForm from './MeetingForm';
import MeetingDetail from './MeetingDetail';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Axios from 'axios';


const ConnectRoutes = ({ user, updateUser }) => {
    
    const [loading, updateLoading] = useState(true);

    useEffect( () => {
        Axios.get('//localhost:3000/auth', { withCredentials: true }).then(
            res => {
                updateUser(res.data);
                updateLoading(false);
            }
        ).catch( err => {
            console.log(err);
            updateLoading(false);
        })
    },[])
    
    return (
        loading ? (
            <div>loading...</div>
        ) : (
            <BrowserRouter>
                <Switch>
                    <PrivateRoute path="/" user={ user } exact component={ Home } />
                    <PrivateRoute path="/meetings/new" user={ user } exact component={ MeetingForm } />
                    <PrivateRoute path="/meetings/:id" user={ user } component={ MeetingDetail } />
                    <PublicRoute path="/login" user={ user } component={ Login } />
                    <PublicRoute path="/signup" user={ user } component={ Signup } />
                </Switch>
            </BrowserRouter>
        )
    
)}

const mapStateToProps = state => {
    return { user: state.user }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: user => dispatch(updateUser(user))
    }
}

const Routes = connect(mapStateToProps, mapDispatchToProps)(ConnectRoutes);

export default Routes;