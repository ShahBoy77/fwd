import React, { useState, useEffect } from "react";
import Beams from "./Beams"; // Import Beams
import "./home.css";

const HomePage = () => {
  const [imageData, setImageData] = useState(null);


  return (
    <div className="homepage" style={{ position: "relative" }}>
      {/* Full-page Beams background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Beams
          beamWidth={2}
          beamHeight={50}
          beamNumber={20}
          lightColor="#7b5eee"
          speed={2.5}
          noiseIntensity={0}
          scale={0.3}
          rotation={30}
        />
      </div>

      {/* Navbar */}
      <nav className="navbar" style={{ position: "relative", zIndex: 1 }}>
        <div className="nav-left">
          <img src="/images/a_logo.svg" alt="Logo" className="nav-logo" />
          <h2 className="nav-title">StreamSphere</h2>
        </div>
        <div className="nav-right">
          <button className="nav-btn" onClick={() => window.location.href = "/Login"}>Login</button>
          <button className="nav-btn" onClick={() => window.location.href = "/Register"}>Register</button>
        </div>
      </nav>

      {/* Main Section */}
      <main className="main-content" style={{ position: "relative", zIndex: 1 }}>
        <div className="left-panel">

        </div>

        <div className="right-panel">
          <h1 className="site-title">StreamSphere</h1>
          <p className="site-description">
            All your favorite OTT content — unified in one seamless platform.
            Discover, watch, and manage shows from every streaming service.
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;