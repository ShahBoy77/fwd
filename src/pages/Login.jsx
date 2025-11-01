import GridMotion from "./GridMotion";
import GlassSurface from "./GlassSurface";
import "./Login.css";

function App() {
  const images = [
   "/images/login/img1.jpg",//1
    "/images/login/img2.jpg",//2
    "/images/login/img3.jpg",//3
    "/images/login/img4.jpg",//4
    "/images/login/img5.jpg",//5 empty
    "/images/login/img6.jpg",//6 empty
    // --------------------------
    "/images/login/img7.jpg",//7
    "/images/login/img8.jpg",//8
    "/images/login/img9.jpg",//9
    "/images/login/img10.jpg",//10
    "/images/login/img11.jpg",//11
    "/images/login/img12.jpg",//12
    // --------------------------
    "/images/login/img13.jpg",//13
    "/images/login/img14.jpg",//14
    "/images/login/img15.jpg",//15
    "/images/login/img16.jpg",//16
    "/images/login/img17.jpg",//17
    "/images/login/img18.jpg",//18
    // --------------------------
    "/images/login/img19.jpg",//19
    "/images/login/img20.jpg",//20
    "/images/login/img21.jpg",//21
    "/images/login/img22.jpg",//22
    "/images/login/img23.jpg",//23
    "/images/login/img24.jpg",//24
    // --------------------------
    "/images/login/img25.jpg",//25
    "/images/login/img26.jpg",//26
    "/images/login/img27.jpg",//27
    "/images/login/img28.jpg",//28
    "/images/login/img29.jpg",//29
    "/images/login/img30.jpg",//30
    // --------------------------
    "/images/login/img31.jpg",//31 empty
    "/images/login/img32.jpg",//32 empty
    "/images/login/img33.jpg",//33
    "/images/login/img34.jpg",//34
    "/images/login/img35.jpg",//35
    "/images/login/img36.jpg",//36
    // --------------------------
  ];

  return (
    <div
      className="app-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background animation */}
      <GridMotion items={images} gradientColor="black" />

      {/* Dark overlay for contrast */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#131122",
          zIndex: 1,
        }}
      ></div>

      {/* Glass Surface Login Box */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <GlassSurface
          width={420}
          height={340}
          borderRadius={24}
          brightness={60}
          opacity={0.8}
          displace={1}
          distortionScale={-80}
          redOffset={0}
          blueOffset={0}
          greenOffset={0}
          mixBlendMode="normal"
          className="flex items-center justify-center"
        >
          {/* Internal wrapper for readability */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              zIndex: 10,
              color: "white",
              padding: "20px",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              borderRadius: "24px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 20px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "35px",
                marginBottom: "20px",
                textShadow: "0 2px 6px rgba(0,0,0,0.8)",
              }}
            >
              Sign In
            </h2>
              <br></br>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                width: "100%",
              }}
            >
              <input
                type="text"
                placeholder="Username"
                style={{
                  width: "80%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                  outline: "none",
                  textAlign: "center",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "white",
                  backdropFilter: "blur(4px)",
                }}
              />
              <input
                type="password"
                placeholder="Password"
                style={{
                  width: "80%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                  outline: "none",
                  textAlign: "center",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "white",
                  backdropFilter: "blur(4px)",
                }}
              />
              <div style={{ display: "flex", gap: "10px" }}>
              <button
                type="submit"
                style={{
                  marginTop: "16px",
                  width: "120px",
                  padding: "10px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255,255,255,0.4)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.4)",
                  cursor: "pointer",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "rgba(255,255,255,0.6)")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "rgba(255,255,255,0.5)")
                }
              >
                Sign In
              </button>
              <button 
                type="button"
                onClick={() => window.location.href = "/Register"} 
                style={{
                  marginTop: "16px",
                  width: "120px",
                  padding: "10px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255,255,255,0.4)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.5)",
                  cursor: "pointer",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.3s ease",
                  
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "rgba(255,255,255,0.6)")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "rgba(255,255,255,0.5)")
                }
              >
                Register
              </button>
              </div>
            </form>
          </div>
        </GlassSurface>
      </div>
    </div>
  );
}

export default App;
