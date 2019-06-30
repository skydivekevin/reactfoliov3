import React, { useEffect, useState } from "react";
import Particles from "react-particles-js";
// import setParticlesHook from "../../customHooks/SetParticlesHook";

import "../../../src/App.css";

const ParticlesComponent = () => {
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
  return (
    <div className='particles'>
      {/* <div>numparts is : {value.numParts}</div> */}
      <div>numparts is : {numParts}</div>
      <div>window height is : {window.innerHeight}</div>
      <div className='particlesConditional'>
        <Particles
          canvasClassName='particles-canvas'
          width='100vw'
          params={{
            particles: {
              size: {
                value: 2
              },
              number: {
                value: numParts
              },
              line_linked: {
                color: "#f9f500"
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default ParticlesComponent;
