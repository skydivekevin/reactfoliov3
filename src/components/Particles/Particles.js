import React from "react";
import Particles from "react-particles-js";

import "../../../src/App.css";

const ParticlesComponent = () => {
  return (
    <div className='particles'>
      <Particles
        canvasClassName='particles-canvas'
        width='100vw'
        params={{
          particles: {
            size: {
              value: 2
            },
            line_linked: {
              color: "#f9f500"
            }
          }
        }}
      />
    </div>
  );
};

export default ParticlesComponent;
