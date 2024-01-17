import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {
  const[navLink , setNavLink] = useState('hidden')

  const toggleNavLink = () => {
    setNavLink((pre) => pre === 'hidden' ? 'visible' : 'hidden')
  }
  return (
    <header className="bg-slate-800 fixed top-0 left-0 w-full z-10">
      <nav className="container h-14 flex justify-between items-center">
        
          <h1 className="font-bold text-3xl uppercase">logo</h1>

        <div className={`${navLink} py-14 bg-slate-800 w-full absolute top-0 left-0 text-2xl md:block md:py-0 md:w-auto md:static ml-auto`}>
          <ul className="flex flex-col text-center font-semibold gap-5 md:flex-row">
            <li>Home</li>
            <li>Contact</li>
            <li>Support</li>
            <li>Privicy</li>
          </ul>

          <div>
            <FontAwesomeIcon icon={faXmark} className="cursor-pointer text-3xl absolute top-[.7rem] right-4 md:hidden" onClick={toggleNavLink}/>
          </div>
        </div>

        <div className="flex gap-5 text-2xl">
          <FontAwesomeIcon icon={faMoon} className="cursor-pointer ml-4"/>

          <FontAwesomeIcon icon={faBars} className="cursor-pointer md:hidden" onClick={toggleNavLink}/>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
