import React from "react";

import About from "../../components/About/About";
import Tech from "../../components/About/Tech";
import "../../../src/App.css";

const AboutPage = () => {
  return (
    <div className='about-page'>
      <div className='about-page-row'>
        <About />
        <Tech />
      </div>
    </div>
  );
};

export default AboutPage;
