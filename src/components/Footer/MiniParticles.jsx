import React from "react";
import Particles from "react-particles-js";

const MiniParticles = props => {
  let color = props.color;
  return (
    <React.Fragment>
      <div className='miniParticles'>
        <Particles
          canvasClassName='particles-canvas'
          params={{
            particles: {
              size: {
                value: 1
              },
              number: {
                value: 6
              },
              line_linked: {
                color: color
              },
              speed: {
                value: 0.5
              }
            }
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default MiniParticles;
