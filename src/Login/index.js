import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { updateUser } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';

const ConnectLogin = ({ user, updateUser }) => {

    const [ email, updateEmail ] = useState();
    const [ password, updatePassword ] = useState();


    const handleFormSubmit = (e) => {
        e.preventDefault();

        axios('//localhost:3000/auth/login', {
            method: 'post',
            data: {
                email,
                password
            },
            withCredentials: true
        }).then( res => updateUser(res.data)
        ).catch( err => console.log(err) )
    }

    return (
        <div className="auth-bg">
            <div class="auth-wrapper">
                <h2>Sign In</h2>
                <form onSubmit={ e => handleFormSubmit(e) }>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={ email } onChange={ e => updateEmail(e.target.value) } />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={ password } onChange={ e => updatePassword(e.target.value)} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <Link to="/signup">Create an account</Link>
            </div>
            
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

const Login = connect(mapStateToProps, mapDispatchToProps)(ConnectLogin);

export default Login;