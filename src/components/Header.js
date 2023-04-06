import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../assets/logo.png"
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../firebase/config';

export const Header = () => {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);

  function handleLogin(){
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
    })
  }

  function handleLogout(){
    signOut(auth);
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
  }

  return (
    <header>
      <Link to="/" className='logo'>
        <img src={Logo} alt="" />
        <span>WriteNode</span>
      </Link>
      <nav className='nav'>
        <NavLink to="/" className='link' end>Home</NavLink>
        { isAuth ? (
          <>
            <NavLink to="/create" className="link">Create</NavLink>
            <button onClick={handleLogout} className="auth"><i className="bi bi-box-arrow-right"></i> Logout</button> 
          </>                   
        ) : (
          <button onClick={handleLogin} className="auth"><i className="bi bi-google"></i> Login</button>
        ) }
      </nav>
    </header>
  )
}
