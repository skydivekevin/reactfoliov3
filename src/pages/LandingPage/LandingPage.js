import React, { useEffect } from "react";
import arrows from '../../Icons/arrows.svg'
import { TweenMax } from 'gsap'

import "../../../src/App.css";

const LandingPage = () => {
  useEffect(() => {
    TweenMax.from(".arrows", 1, { y: -30, repeat: "loop" });

  }, []);




  const scrollToRef = () => window.scrollTo(0, window.innerHeight)
  const useMountEffect = (fun) => useEffect(fun, [])


  // const myRef = useRef(null)

  useMountEffect(() => scrollToRef())






  const arrowClick = () => {
    scrollToRef()
  }

  return (
    <div className='landing-page'>
      <div className='intro-wrapper'>
        <div className='intro-name'>Kevin Potts</div>
        <div className='tagline'>
          Full Stack Dev | Teacher | Make things work(er)
        </div>
      </div>
      {/* <button onClick={() => scrollToRef(myRef)} >Click to scroll </button> */}
      <div className="arrows-container" onClick={arrowClick}>
        <img src={arrows} className="arrows" alt="logo" />
      </div>
    </div>
  );
};


export default LandingPage;
