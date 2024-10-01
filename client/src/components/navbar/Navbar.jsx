import React, { useContext, useState } from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Navbar() {

  const {currentUser} = useContext(AuthContext);

  const [open,setOpen] = useState(false)

  const user = true;

  return (
    <nav>
        <div className="left">
          <a href="/" className='logo'>
            <img src="/logo.png" alt="" />
            <span>EstateLover</span>
          </a>
          <a href="/">Home</a>
          <a href="/list">List</a>
          <a href="/contact">Contact</a>
          <a href="/">Agents</a>
        </div>
        <div className="right">
          {currentUser ? (
            <div className='user'>
              <img src= {currentUser.avatar || "/noavatar.jpeg"}
               alt="" />
              <span>{currentUser.username} </span>

              <Link to="/profile" className='profile'>
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
              
            </div>
          ):(
            <>
              <a href="/login">Sign In</a>
              <a href="/register" className='register'>Sign Up</a>
            </>
          )}

          <div className="menuIcon">
            <img src="/menu.png" alt="" onClick={()=>setOpen((prev)=>!prev)}/>
          </div>

          <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign in</a>
            <a href="/">Sign up</a>
          </div>

        </div>
    </nav>
  )
}

export default Navbar
