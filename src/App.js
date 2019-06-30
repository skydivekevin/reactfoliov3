import React, { Component } from "react";
import "./App.css";

import LandingPage from "./pages/LandingPage/LandingPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ParticlesComponent from "./components/Particles/Particles";
// import Footer from "./components/Footer/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#F5E050"
    };
  }
  /////////////////TESTING//////////////////////
  // const initialTheme = "red";
  // const [theme, setTheme] = useState(initialTheme);

  /////////////////TESTING//////////////////////
  colorChanger = () => {
    this.setState({
      color: "#062ecf"
    });
  };
  render() {
    return (
      <div className='App'>
        <ParticlesComponent
          theme={this.state.color}
          colorChanger={this.colorChanger}
        />
        <LandingPage theme={this.state.color} />
        <AboutPage />
      </div>
    );
  }
}
