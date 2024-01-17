import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";


const NavBar = () => {

 const [navLink , setNavLink] = useState(true);

 const toggleNavLink = () => {
  setNavLink((pre) => pre === false ? true : false)
 }
  return (
    <header className="w-full fixed bg-slate-800 z-50">
      <nav className="container h-14  flex justify-between items-center">
        <h1 className="text-3xl font-bold shadow-sm">LOGO</h1>
        <div className={`${navLink && 'hidden'} w-full bg-slate-800 py-14 absolute top-14 border-t-2 border-white h-screen left-0 md:block md:w-auto md:border-none md:h-auto md:py-0 md:ml-auto md:static `}>
          <ul className=" flex flex-col text-center gap-5 text-2xl md:flex-row">
            <li>Home</li>
            <li>Service</li>
            <li>Project</li>
            <li>About</li>
          </ul>
          
        </div>

        <div className="flex gap-5 text-2xl items-center">
          <FontAwesomeIcon icon={faMoon} className="ml-4"/>
          {
            navLink == true ?
            (<FontAwesomeIcon icon={faBars} className="md:hidden" onClick={toggleNavLink}/>)
            : 
            (<FontAwesomeIcon icon={faXmark} onClick={toggleNavLink} className=" md:hidden text-3xl"/>)
          }
          
          
        </div>
      </nav>
    </header>
  )
}

export default NavBar
