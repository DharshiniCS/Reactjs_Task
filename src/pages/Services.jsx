import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'
 
export default function Services() {
  return (
    <div className='page'>
      <h1>Services Page</h1>
      <div className="subnav">
        <NavLink to="web-development">Web Development</NavLink>
        <NavLink to="app-development">App Development</NavLink>
        <NavLink to="uiux-design">UI/UX Design</NavLink>
      </div>
      <Outlet/>
    </div>
  )
}
