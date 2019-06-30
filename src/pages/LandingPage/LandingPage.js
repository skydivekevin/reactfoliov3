import React, { useEffect } from "react";
import arrows from "../../Icons/arrows.svg";
import { TweenMax } from "gsap";
// import setParticlesHook from "../../customHooks/SetParticlesHook";

import "../../../src/App.css";

const LandingPage = () => {
  useEffect(() => {
    TweenMax.from(".arrows", 1, { y: -30, repeat: "loop" });
  }, []);

  const scrollToRef = () =>
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });

  ////////////////////////////////////////TESTING////////////////////////////////////////

  return (
    <React.Fragment>
      <div className='landing-page'>
        <div className='intro-wrapper'>
          <div className='intro-name'>Kevin Potts</div>
          <div className='tagline'>
            Full Stack Dev | Teacher | Make things work(er)
          </div>
        </div>
        <div className='arrows-container' onClick={scrollToRef}>
          <img src={arrows} className='arrows' alt='arrowsSVG' />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
