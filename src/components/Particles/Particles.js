import React from "react";
import Particles from "react-particles-js";
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
      numParts = 80;
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
  const colorChanger = props.colorChanger;
  return (
    <div className='particles'>
      <div className='changeTheme' onClick={colorChanger}>
        change theme
      </div>
      <div className='particlesConditional'>
        <Particles
          canvasClassName='particles-canvas'
          params={{
            particles: {
              size: {
                value: 2
              },
              number: {
                value: numParts
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
