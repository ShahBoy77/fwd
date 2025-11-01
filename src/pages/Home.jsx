import React, { useState, useEffect } from "react";
import MetallicPaint, { parseLogoImage } from "./MetallicPaint";
import Beams from "./Beams"; // Import Beams
import "./home.css";

const HomePage = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    async function loadDefaultImage() {
      try {
        const response = await fetch("/images/a_logo.svg");
        if (!response.ok) throw new Error("Logo not found");
        const blob = await response.blob();
        const file = new File([blob], "default.png", { type: blob.type });
        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);
      } catch (err) {
        console.error("Error loading default image:", err);
      }
    }
    loadDefaultImage();
  }, []);

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
          <MetallicPaint
            imageData={imageData ?? new ImageData(1, 1)}
            params={{
              edge: 0.1,
              patternBlur: 0.05,
              patternScale: 2,
              refraction: 0.04,
              speed: 0.2,
              liquid: 0.07,
            }}
          />
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