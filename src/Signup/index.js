import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { updateUser } from '../actions';

const ConnectSignup = ({ user, updateUser}) => {

    const [ name, updateName ] = useState();
    const [ email, updateEmail ] = useState();
    const [ password, updatePassword ] = useState();
    const [ passConfirm, updatePassConfirm ] = useState();

    
    const handleFormSubmit = (e) => {
        e.preventDefault();

        axios.post('//localhost:3000/user', { 
            name,
            email,
            password
        }).then( res => {
            axios('//localhost:3000/auth/login', {
                method: 'post',
                data: {
                    email,
                    password
                },
                withCredentials: true
            }).then( res => 
                updateUser(res.data)
            ).catch(
                err => console.log(err)
            )
        })
        .catch( err => console.log(err) )
    }

    return (
        <div class="auth-bg">
            <div class="auth-wrapper"> 
                <h2>Sign Up</h2>
                <form onSubmit={ e => handleFormSubmit(e) }>
                    <label for="name">Name</label>
                    <input type="text" id="name" value={ name } onChange={ e => updateName(e.target.value) } />
                    <label for="email">Email</label>
                    <input type="email" id="email" value={ email } onChange={ e => updateEmail(e.target.value) } />
                    <label for="password">Password</label>
                    <input type="password" id="password" value={ password } onChange={ e => updatePassword(e.target.value) } />
                    <label for="password-confirm">Confirm Password</label>
                    <input type="password" id="password-confirm" value={ passConfirm } onChange={ e => updatePassConfirm(e.target.value) } />
                    <button type="submit">Sign Up</button>
                </form>
                <Link to="/login">Login Instead</Link>
            </div>
        </div>
        
    )
}

const mapStateToProps = state => {
    return { user: state.user }
}

const mapDispatchToProps = dispatch => {
    return { updateUser: user => dispatch(updateUser(user)) }
}

const Signup = connect(mapStateToProps, mapDispatchToProps)(ConnectSignup)

export default Signup;