import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import React from "react";

function Nav() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  let navigateHome = useNavigate(); 
  const routeChangeHome = () =>{ 
    let path = '/'; 
    navigateHome(path);
  }

  return (
    <div className="w-screen h-[5rem] z-10 bg-slate-300 fixed drop-shadow-lg ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div onClick={routeChangeHome}className="text-3xl font-bold mr-4 sm:text-4xl cursor-pointer">IH</div>
          <div className="flex items-center">
            <ul className="nav hidden md:flex">
              <NavLink className='navlink' to="/">Home</NavLink>
              <NavLink className='navlink' to="/projects">Projects</NavLink>
              <NavLink className='navlink' to="/about">About</NavLink>
             <NavLink className='navlink' to="/contact">Contact</NavLink>
            </ul>
          </div>
        <div className="md:hidden" onClick={handleClick}>
              {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5"/>}
              
            </div>
      </div>
      
    <ul className={!nav ? "hidden" : "absolute bg-slate-300 w-full px-8"}>
     <li className="border-b-2 border-slate-300 w-full py-3 text-center"> <NavLink to="/">Home</NavLink> </li>
     <li className="border-b-2 border-slate-300 w-full py-3 text-center"> <NavLink to="/projects">Projects</NavLink></li>
     <li className="border-b-2 border-slate-300 w-full py-3 text-center"> <NavLink to="/about">About</NavLink></li>
     <li className="border-b-2 border-slate-300 w-full py-3 text-center"> <NavLink to="/contact">Contact</NavLink></li>
    </ul>

 
    </div>
  );
}

export default Nav;
