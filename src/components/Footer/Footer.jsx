import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <React.Fragment>
      <div className='footer'>
        <h3 className='footercontent'>Hello from inside Footer</h3>
        <button onClick={scrollToTop} className='scrollUpButton'>
          Scroll to Top
        </button>
      </div>
    </React.Fragment>
  );
};

export default Footer;
