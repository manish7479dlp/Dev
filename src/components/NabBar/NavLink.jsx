import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavLink = ({openNavLink , closeNavLink}) => {
  return (
    <div
      className={`${openNavLink} absolute left-0 top-0 w-full  bg-slate-800 border-b py-14 md:block md:w-auto md:ml-auto md:static md:border-none md:py-0`}
    >
      <ul className="flex flex-col gap-5 text-center tracking-wider md:flex-row">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Service</li>
        <li>Privicy</li>
      </ul>

      {/* close btn */}
      <div
        className="text-white text-2xl absolute top-[.7rem] right-4 md:hidden"
        onClick={closeNavLink}
      >
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
};

export default NavLink;
