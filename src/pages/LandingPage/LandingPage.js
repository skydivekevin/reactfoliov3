import React, { useEffect } from "react";
import arrows from "../../Icons/arrows.svg";
import Arrows from "../../Icons/Arrows.js";
import { TweenMax } from "gsap";
import "../../../src/App.css";

const LandingPage = props => {
  useEffect(() => {
    TweenMax.from(".arrows", 1.5, { y: -30, repeat: "loop" });
  }, []);

  const scrollToRef = () =>
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });

  ////////////////////////////////////////TESTING////////////////////////////////////////

  // const handleTaglineClick = () => {
  //   console.log("event.target");
  // };
  // const [theme] = useState(initialTheme);
  // const bigArrowChanger = () => {
  //   console.log("hit bigArrowChanger");
  // };
  ////////////////////////////////////////TESTING////////////////////////////////////////

  return (
    <React.Fragment>
      <div className='landing-page'>
        <div className='intro-wrapper'>
          <div className='intro-name' onClick={scrollToRef}>
            Kevin Potts
          </div>
          <div className='tagline' onClick={scrollToRef}>
            <span className='tagline-full-stack-dev'>Full Stack Dev</span> |{" "}
            <span className='tagline-teacher'>Teacher</span> |{" "}
            <span className='tagline-make-things-work'>
              Make things work(er)
            </span>
          </div>
        </div>
        <div className='arrows-container' onClick={scrollToRef}>
          <Arrows
            className='arrows'
            onClick={scrollToRef}
            color={props.color}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
