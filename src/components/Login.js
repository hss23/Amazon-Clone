/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import { auth, db } from '../firebase';
import './Login.css'
const Login = () => {
    const history = useHistory();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
                />
            </Link>

            <div className='login__container'>
                <h1>SignIn</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setemail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setpassword(e.target.value)} />
                    <button type="submit" className="login__signinButton" onClick={signIn}>Sign IN</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            </div>
            <button className="login__registerButton" onClick={register}>Create Your Amazon Account</button>
        </div >
    )
}

export default Login
