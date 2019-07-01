import React from "react";
import MiniParticles from "./MiniParticles";

const Footer = props => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <React.Fragment>
      <div className='footer'>
        <h3 className='footercontent'>Hello from inside Footer</h3>
        <div onClick={scrollToTop} className='scrollupdiv'>
          <span className='scrollToTop'>Scroll to Top</span>
          <MiniParticles color={props.color} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
