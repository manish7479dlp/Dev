import React, { useState } from "react";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import NavLink from "./NavLink";

const NavBar = () => {
  const [openNavLink, setOpenNavLink] = useState("hidden");
  const closeNavLink = () => {
    setOpenNavLink((pre) => (pre === "hidden" ? null : "hidden"));
  };
  return (
    <header className="w-full fixed top-0 left-0 bg-slate-800 z-50 select-none">
      <nav className="container h-14 flex items-center justify-between ">
        <Logo />

        <NavLink closeNavLink={closeNavLink} openNavLink={openNavLink} />

        <ModeBtn closeNavLink = {closeNavLink} />
      </nav>
    </header>
  );
};

const ModeBtn = ({closeNavLink}) => {
  return (
    <div className="flex gap-5 items-center text-xl ml-4">
      <FontAwesomeIcon icon={faMoon} />

      <div className="cursor-pointer md:hidden">
        <FontAwesomeIcon icon={faBars} onClick={closeNavLink} />
      </div>
    </div>
  );
};

export default NavBar;
