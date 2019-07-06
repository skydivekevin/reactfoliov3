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
      color: "#F5E050",
      size: 2,
      number: 100,
      screenPosition: window.innerHeight,
      pageYOffset: window.pageYOffset
    };
    this.someRefName = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
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
      "#ffa600",
      "#F5E050",
      "#42f5f5",
      "#bf0202"
    ];
    let randoColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    this.setState({
      color: randoColor
    });
  };

  ///////////////////////////////////////////
  sizeChanger = () => {
    const sizeArr = [1, 3, 5, 7, 9, 11];
    let nextSize = parseInt(
      sizeArr[Math.floor(Math.random() * sizeArr.length)]
    );
    this.setState({
      size: nextSize
    });
    console.log(nextSize);
  };

  numberChanger = () => {
    const numArr = [10, 80, 150, 200, 275, 350];
    let nextNumber = numArr[Math.floor(Math.random() * numArr.length)];
    this.setState({
      number: nextNumber
    });
  };
  handleScroll = () => {
    // console.log("handleScroll in App.js");
    let offsetTop = this.someRefName.current.offsetTop;
    console.log(offsetTop);
  };
  ///////////////////////////////////

  // changeArrowColor = () => {
  //   console.log("arrowColorChanger triggered");
  // };
  render() {
    return (
      <div className='App'>
        <ParticlesComponent
          color={this.state.color}
          size={this.state.size}
          number={this.state.number}
          colorChanger={this.colorChanger}
          changeArrowColor={this.changeArrowColor}
          sizeChanger={this.sizeChanger}
          numberChanger={this.numberChanger}
        />
        <LandingPage color={this.state.color} />
        <AboutPage color={this.state.color} ref={this.someRefName} />
      </div>
    );
  }
}
