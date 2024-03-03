import React, { useState } from 'react';
import './Login.css'
import axios from 'axios'
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Login = () => {
  const cliendId = "d7782ba4827e439580bc19993e5a40c9";
  const redirectUri = "http://localhost:3000/";
  const apiUrl = 'https://accounts.spotify.com/authorize';
  const scope = [
    'user-read-email',
    'user-read-private',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-position',
    'user-top-read'
  ]


  const[userName, setUserName] = useState('');
  const[password, setPassword] = useState('');
  const[error, setError] = useState({})
  const LoginValidate = async ( e, username, password ) => {
    let errors = {}
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(username === ''){
      errors.name = "Enter a name";
    }
    else if(!emailRegex.test(username)) {
      errors.name = 'Enter a valid name';
    }
    else {
      errors.name = '';
    }
    const regularExpression  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password === ''){
      errors.password = "Enter a password";
    }
    else if(!regularExpression.test(password)) {
      errors.password = 'Enter a valid password'
    }
    else {
      errors.password = '';
    }
    setError(errors)
    // alert(`${apiUrl}?client_id=${cliendId}&redirect_uri=${redirectUri}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`)
    window.location.href = `${apiUrl}?client_id=${cliendId}&redirect_uri=${redirectUri}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;
    if(error.name=='' && error.password == ''){
      const loginData = {
        username: username,
        password: password
      }
      try {
        await axios.post('/login', loginData);
        
      }
      catch (err){
        console.log(err)
      }
    }
  }
  return (
    <div className='login'>
        <div>
          <form className='grid'>
            <h1>Login</h1>
            <div className='input-field'>
              <label>Username</label>
              <input onChange={(e) => setUserName(e.target.value)} type='text' name='Username' placeholder='Username'/>
              {error && error.name ? <span className='text-danger'>{ error.name }</span> : null}
              <label>Password</label>
              <input onChange={(e) => setPassword(e.target.value)} type='password' name='Password' placeholder='Password'/>
              {error && error.password ? <span className='text-danger'>{ error.password }</span> : null}
            </div>
            <a href="" className='forget_password'>Forgot password?</a>
            <input onClick={(e) => LoginValidate(e, userName, password)} type='submit' className='submit' value="Login"/>
            <p>Or Sign Up using</p>
            
            <div className='login-buttons'>
              <button className='login-button'><FcGoogle /></button>
              <button className='login-button fb'><FaFacebook /></button>
              <button className='login-button'><FaApple /></button>
              {/* <button href={AUTH_URL}>Login</button> */}
            </div>
          </form>
        </div>
    </div>
  )
}

export default Login