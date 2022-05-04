import React from 'react'
import {AiOutlineBook, AiOutlineHome, AiOutlineUser,} from "react-icons/ai";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";

const Nav = () => {
  return (
    <div>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><AiOutlineBook /></a>
      <a href="#services"><RiServiceLine /></a>
      <a href="#contact"><BiMessageSquareDetail /></a>
    </div>
  )
}

export default Nav