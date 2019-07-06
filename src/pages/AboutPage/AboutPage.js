import React, { Component } from "react";

import About from "../../components/About/About";
import Tech from "../../components/About/Tech";
import Footer from "../../components/Footer/Footer";
import "../../../src/App.css";

export default class AboutPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='about-page'>
          <div className='about-page-row'>
            <About />
            <Tech />
          </div>
          <Footer color={this.props.color} />
        </div>
      </React.Fragment>
    );
  }
}
