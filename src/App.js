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
    const colorArr = [
      "#062ecf",
      "#e80505",
      "#22bd17",
      "#6d17bd",
      "#df09e3",
      "#ffa600"
    ];
    let randoColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    this.setState({
      color: randoColor
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
