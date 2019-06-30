import React from "react";
import "./App.css";

import LandingPage from "./pages/LandingPage/LandingPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ParticlesComponent from "./components/Particles/Particles";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <ParticlesComponent />
      <LandingPage />
      <AboutPage />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
