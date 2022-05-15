import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import pdf from '../documents/iffathossainresume.pdf' 
import React from "react";

function Nav() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

 
  return (
    <div className="w-screen h-[5rem] z-10 bg-slate-300 fixed drop-shadow-lg ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div onClick={() => window.location.replace("/#top")} className="text-3xl font-bold mr-4 sm:text-4xl cursor-pointer">IH</div>
          <div className="flex items-center">
            <ul className="nav hidden md:flex">
             <div className='navlink' onClick={() => window.location.replace("/#top")}>Home</div>
             <div  className='navlink' onClick={() => window.location.replace("/#about")}>About</div>
             <div className='navlink' onClick={() => window.location.replace("/#projects")}>Projects</div>
             <div  className='navlink' onClick={() => window.location.replace("/#contact")}>Contact</div>
             <a className="navlink" href = {pdf} target = "_blank">Resume</a> 

            </ul>
          </div>
        <div className="md:hidden" onClick={handleClick}>
              {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5"/>}
              
            </div>
      </div>
      
    <ul className={!nav ? "hidden" : "absolute bg-slate-300 w-full px-8"}>
     <li className="border-b-2 border-slate-300 w-full py-3 text-center"> <NavLink className='navlink' to="/">Home</NavLink> </li>
     <li className="border-b-2 border-slate-300 w-full py-3 text-center"> <NavLink className='navlink' to="/about">About</NavLink></li>
     <li className="border-b-2 border-slate-300 w-full py-3 text-center"> <div className='' onClick={() => window.location.replace("/#contact")}>Contact</div> </li>
     <li className="border-b-2 border-slate-300 w-full py-3 text-center"> <a className="navlink" href = {pdf} target = "_blank">Resume</a> </li>
    </ul>

 
    </div>
  );
}

export default Nav;
