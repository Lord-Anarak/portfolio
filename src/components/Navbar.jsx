import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles.js";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [Open, setOpen] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary text-white`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto relative">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[2rem] font-bold cursor-pointer">
            Portfolio
          </p>
          <div className="w-2 h-2 bg-[#804dee] mt-2"></div>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div onClick={() => setOpen(!Open)} className="sm:hidden flex">
          <img src={Open ? close : menu} alt="menu" />
        </div>
        <ul
          className={`list-none flex sm:hidden flex-col absolute top-16 w-full items-center bg-primary transition-all duration-500 overflow-hidden ${
            Open ? "max-h-screen" : "max-h-0"
          }`}
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer p-5`}
              onClick={() => {
                setActive(link.title);
                setOpen(false);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
