import React from 'react';

import {BsLinkedin} from "react-icons/bs";
import {FaGithub, FaTwitter} from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='blank'>
            <BsLinkedin/>
        </a>
        <a href="https://github.com" target='blank'>
            <FaGithub/>
        </a>
        <a href="https://twitter.com" target='blank'>
            <FaTwitter />
        </a>
    </div>
  )
}

export default HeaderSocials