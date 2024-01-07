import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {
    const [openNavLink , setOpenNavLink] = useState("hidden")
    const toggleNavLink = () => {
        setOpenNavLink((pre) => pre === 'hidden' ? 'none' : 'hidden')
    }
  return (
    <header className="bg-slate-800 w-full fixed top-0 left-0">
      <nav className="container h-14 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">LOGO</h1>
        </div>

        <div className={`${openNavLink} w-full bg-slate-800 absolute top-0 left-0 py-14 md:block md:w-auto md:static md:py-0
        md:ml-auto`}>
          <ul className="flex flex-col text-center gap-5 text-xl md:flex-row">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Service</li>
            <li>Support</li>
          </ul>
          <div className="absolute top-[.7rem] right-4 text-2xl cursor-pointer">
            <FontAwesomeIcon icon={faXmark} className="md:hidden" onClick={toggleNavLink}/>
          </div>
        </div>

        <div className="flex items-center gap-5 text-2xl">
          <FontAwesomeIcon icon={faMoon} className="cursor-pointer ml-4" />

          <div>
            <FontAwesomeIcon icon={faBars} className="cursor-pointer md:hidden" onClick={toggleNavLink}/>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
