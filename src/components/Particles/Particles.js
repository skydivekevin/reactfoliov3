import React from "react";
import Particles from "react-particles-js";
import arrowright from "../../Icons/arrowright.svg";

// import setParticlesHook from "../../customHooks/SetParticlesHook";

import "../../../src/App.css";

const ParticlesComponent = props => {
  // 80 if window size >= 420; if window size <= 420 I want 30

  ///////////////////TESTING/////////////////////
  /////////////////STATIC////////////////////
  let numParts;

  setNumParts();

  function setNumParts() {
    if (window.innerWidth >= 420) {
      numParts = 100;
    } else {
      numParts = 30;
    }
  }
  /////////////////STATIC////////////////////
  //////////////////DYNAMIC////////////////////

  // const [value, setDimensions] = useState({
  //   numParts: 50
  // });

  // useEffect(() => {
  //   function handleResize() {
  //     if (window.innerWidth >= 420) {
  //       setDimensions({
  //         numParts: 80
  //       });
  //     } else {
  //       setDimensions({
  //         numParts: 30
  //       });
  //     }
  //   }
  //   window.addEventListener("resize", handleResize);
  //   // return window.removeEventListener("resize", handleResize);
  // });
  //////////////////DYNAMIC////////////////////
  //////////////////////TESTING///////////////////////

  let color = props.theme;
  let size = props.size;
  let number = props.number;

  const colorChanger = props.colorChanger;
  const sizeChanger = props.sizeChanger;
  const numberChanger = props.numberChanger;
  // const changeArrowColor = props.changeArrowColor;
  return (
    <div className='particles'>
      <div className='arrowright'>
        <h4 className='switchthemetext'>Switch Color</h4>
        <img
          src={arrowright}
          className='arrowrighticon'
          onClick={colorChanger}
          alt='arrowright'
        />
      </div>
      {/* //////////////////////changesizetest/////////////////// */}
      <div className='switchsize'>
        <h4 className='switchsizetext'>Switch Size</h4>
        <img
          src={arrowright}
          className='arrowrighticon'
          onClick={sizeChanger}
          alt='arrowright'
        />
      </div>

      {/* //////////////////////changesizetest/////////////////// */}

      {/* //////////////////////changenumbertest/////////////////// */}
      <div className='switchnumber'>
        <h4 className='switchnumbertext'>Switch Number</h4>
        <img
          src={arrowright}
          className='arrowrighticon'
          onClick={numberChanger}
          alt='arrowright'
        />
      </div>

      {/* //////////////////////changenumbertest/////////////////// */}
      <div className='particlesConditional'>
        <Particles
          canvasClassName='particles-canvas'
          params={{
            particles: {
              size: {
                value: size
              },
              number: {
                value: number
              },
              line_linked: {
                color: color
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default ParticlesComponent;
