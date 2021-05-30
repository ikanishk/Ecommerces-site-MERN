import React, { useState } from 'react';
import "./Login.css"
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";


function Login() {
    const history=useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const login =event =>{
        event.preventDefault(); //this prevent form refresh and tells user to login again
        
        auth.signInWithEmailAndPassword(email,password).then((auth) => {
            // it successfully created a new user with email and password
          history.push('/');
        })
        .catch(error => alert(error.message))

    }

    const register =event =>{
        event.preventDefault(); //prevents refresh
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth =>{
            history.push('/');

        })
        .catch(error => alert(error.message))

    }
    
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                  src="http://pngimg.com/uploads/amazon/amazon_PNG26.png"
                    alt="amazonLogo"
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input value={email}  onChange={e => setEmail(e.target.value)} type='email'  />


                    <h5>Password</h5>
                    <input value={password}  onChange={e => setPassword(e.target.value)} type='password'  />

                    <button onClick={login}  type='submit' className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
        
    )
}

export default Login
