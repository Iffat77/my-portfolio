import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import pdf from '../documents/iffathossainresume.pdf' 
import React from "react";

function Nav() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

 
  return (
    <div className="w-screen fill-transparent h-[5rem] z-10 fixed drop-shadow-lg ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div onClick={() => window.location.replace("/#top")} className="rounded-lg text-black-300 hover:text-orange-300 px-4 py-3 text-3xl font-bold mr-4 sm:text-4xl cursor-pointer">IH</div>
          <div className="flex items-center">
            <ul className="nav hidden md:flex">
             <div className='navlink cursor-pointer rounded-lg text-black-300 hover:text-orange-300' onClick={() => window.location.replace("/#top")}>Home</div>
             <div  className='navlink cursor-pointer rounded-lg text-black-300 hover:text-orange-300' onClick={() => window.location.replace("/#about")}>About</div>
             <div className='navlink cursor-pointer rounded-lg text-black-300 hover:text-orange-300' onClick={() => window.location.replace("/#projects")}>Projects</div>
             <div  className='navlink cursor-pointer rounded-lg text-black-300 hover:text-orange-300' onClick={() => window.location.replace("/#contact")}>Contact</div>
             <a className='navlink cursor-pointer rounded-lg text-black-300 hover:text-orange-300' href = {pdf} target = "_blank">Resume</a> 

            </ul>
          </div>
        <div className="md:hidden" onClick={handleClick}>
              {!nav ? <MenuIcon className="w-7 mr-4 cursor-pointer text-black-300 " /> : <XIcon className="w-5 cursor-pointer text-black-300 hover:text-orange-300"/>}
              
            </div>
      </div>
      
    <ul className={!nav ? "hidden" : "absolute bg-white w-full px-8"}>
     <li className="border-slate-300 w-full py-3 text-center"> <div className='text-black-300 cursor-pointer' onClick={() => (window.location.replace("/#top"),handleClick())}>Home</div> </li>
     <li className="border-slate-300 w-full py-3 text-center"> <div className='text-black-300 cursor-pointer' onClick={() => (window.location.replace("/#about"),handleClick())}>About</div></li>
     <li className="border-slate-300 w-full py-3 text-center"> <div className='text-black-300 cursor-pointer' onClick={() => (window.location.replace("/#projects"),handleClick())}>Projects</div> </li>
     <li className="border-slate-300 w-full py-3 text-center"> <div className='text-black-300 cursor-pointer' onClick={() => (window.location.replace("/#contact"),handleClick())}>Contact</div> </li>
     <li className="border-slate-300 w-full py-3 text-center"> <a className='text-black-300 cursor-pointer' href = {pdf} target = "_blank">Resume</a> </li>
    </ul>

 
    </div>
  );
}

export default Nav;
