import React from 'react';
import "./home.scss";
import CTA from '../../components/CTA';
import HeaderSocials from '../../components/HeaderSocials';

const Home = () => {
  return (
    <div className='home'>
        <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hanniel Daniel</h1>
        <h5 className='text-light'>A Front-end Web-Developer</h5>
        <CTA/>
        <HeaderSocials />  

        <div className="me">
          <img src="" alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </div>
  )
}

export default Home