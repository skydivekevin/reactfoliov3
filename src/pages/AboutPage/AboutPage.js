import React from "react";

import About from "../../components/About/About";
import Tech from "../../components/About/Tech";
import Footer from "../../components/Footer/Footer";
import "../../../src/App.css";

const AboutPage = props => {
  return (
    <React.Fragment>
      <div className='about-page'>
        <div className='about-page-row'>
          <About />
          <Tech />
        </div>
        <Footer color={props.color} />
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
