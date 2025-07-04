import React, { useContext, useEffect } from 'react'
import './Layout.scss'
import Navbar from "../../components/navbar/Navbar"
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function Layout() {
  return (
      <div className="layout">
       <div className="navbar">
         <Navbar/>
       </div>
       <div className="content">
          <Outlet/>
       </div>
     </div>
  )
}

function RequireAuth() {
  const {currentUser} = useContext(AuthContext);

  // useEffect(()=>{
  //   if(!currentUser){
  //     <Navigate to="/login"/>;
  //   }
  // },[currentUser]);

  return (
    !currentUser ? <Navigate to="/login" /> : (
      <div className="layout">
       <div className="navbar">
         <Navbar/>
       </div>
       <div className="content">
          <Outlet/>
       </div>
     </div>
  )
)
}

export {Layout, RequireAuth} 