import React from "react";
import "./App.css";

import LandingPage from "./pages/LandingPage/LandingPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ParticlesComponent from "./components/Particles/Particles";

function App() {
  return (
    <div className='App'>
      <ParticlesComponent />
      <LandingPage />
      <AboutPage />
    </div>
  );
}

export default App;
