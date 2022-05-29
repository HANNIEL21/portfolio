import React, {useState} from 'react'
import {AiOutlineBook, AiOutlineHome, AiOutlineUser,} from "react-icons/ai";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#home" onClick={() => {
          setActiveNav("#home")
        }}
         className={activeNav === "#" ? "active" : ""}
         ><AiOutlineHome /></a>
         
      <a href="#about" 
        onClick={() => {
          setActiveNav("#about")
        }}
        className={activeNav === "#about" ? "active" : ""}
        ><AiOutlineUser /></a>

      <a href="#experience"
      onClick={() => {
        setActiveNav("#experience")
      }}
      className={activeNav === "#experience" ? "active" : ""}
      ><AiOutlineBook /></a>

      <a href="#portfolio"
      onClick={() => {
        setActiveNav("#portfolio")
      }}
      className={activeNav === "#services" ? "active" : ""}
      ><RiServiceLine /></a>

      <a href="#contact"
      onClick={() => {
        setActiveNav("#contact")
      }}
      className={activeNav === "#contact" ? "active" : ""}
      ><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav