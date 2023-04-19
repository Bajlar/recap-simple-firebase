import React, { useState } from 'react';
import './Login.css';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  // console.log(app);
  const googleProvider = new GoogleAuthProvider();
  // console.log(provider);
  const githubProvider = new GithubAuthProvider();


  const handleGoogleLogin = () => {
    // console.log('google login button click');
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const loggedInUser = result.user;
      // console.log(loggedInUser);
      setUser(loggedInUser);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const handleGithubLogin = () => {
    // console.log('github login button click');
    signInWithPopup(auth, githubProvider)
    .then((result) => {
      const loggedInUser = result.user;
      // console.log(loggedInUser);
      setUser(loggedInUser);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const handleGoogleLogOut = () => {
    // console.log('google log out button click');
    signOut(auth)
    .then((result) => {
      setUser(null);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div>
      { user ?
        <button onClick={handleGoogleLogOut} className='btn btn-login'>Sign Out</button> 
        :
        <div>
          <button onClick={handleGoogleLogin} className='btn btn-logout'>Google Login</button>
          <button onClick={handleGithubLogin} className='btn btn-github'>Github Login</button>
        </div>
      }
      {
        user && 
        <div>
          <h3>User: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </div>
  );
};

export default Login;