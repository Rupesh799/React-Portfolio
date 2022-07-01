import React,{useState} from 'react'
import "./Nav.css"
import { AiFillHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { CgReadme } from "react-icons/cg";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { MdOutlineMarkunread } from "react-icons/md";
// import { useState } from "react";
const Nav = () => {
  const [navActive, setNavActive] = useState("#");
  return (
    <nav>
    <a href="/"
      onClick={() => setNavActive("#")}
      className={navActive === "#" ? "active" : ""}>
      <AiFillHome />
    </a>
    <a
      href="#about"
      onClick={() => setNavActive("#about")}
      className={navActive === "#about" ? "active" : ""}
    >
      <FaRegUser />
    </a>
    <a
      href="#experience"
      onClick={() => setNavActive("#experience")}
      className={navActive === "#experience" ? "active" : ""}
    >
      <CgReadme />
    </a>
    <a
      href="#services"
      onClick={() => setNavActive("#services")}
      className={navActive === "#services" ? "active" : ""}
    >
      <MdOutlineMiscellaneousServices />
    </a>
    <a
      href="#contact"
      onClick={() => setNavActive("#contact")}
      className={navActive === "#contact" ? "active" : ""}
    >
      <MdOutlineMarkunread />
    </a>
  </nav>
  )
}

export default Nav