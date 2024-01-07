import React, { useState } from 'react';
import "./home.css";
import Me from "../../assets/jasonavatar.png";
import FlippedMe from "../../assets/jasonnobackground.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <section className="home container" id="home">
      <div className="intro">
        <img
          src={isFlipped ? FlippedMe : Me} 
          alt=""
          className={`home_img ${isFlipped ? 'flipped' : ''}`}
          onClick={handleFlip}
        />
        <h1 className="home_name"> Jason Lei</h1>
        <span className="home_education"> Full Stack Web Developer</span>

        <HeaderSocials />
        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
