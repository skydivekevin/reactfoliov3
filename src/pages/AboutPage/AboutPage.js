import React from "react";

import About from "../../components/About/About";
import Tech from "../../components/About/Tech";
import Footer from "../../components/Footer/Footer";
import "../../../src/App.css";

const AboutPage = () => {
  return (
    <React.Fragment>
      <div className='about-page'>
        <div className='about-page-row'>
          <About />
          <Tech />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
