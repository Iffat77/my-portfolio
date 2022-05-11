import { NavLink } from "react-router-dom";
import React from 'react'


function Nav() {

  return (
    <nav>
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/experiences">Ecperiences</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>
    </nav>
  )
}

export default Nav