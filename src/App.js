import { useLayoutEffect, useRef } from "react";
import "./App.css";
import Subhero from "./components/Subhero/Subhero";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./layout/Navbar";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Mission from "./components/mission/Mission";
import Footer from "./components/footer/Footer";

function App() {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });
  return (
    <div className="App">
      <div className="app-container" ref={containerRef}>
        <Navbar />
        <Homepage />
        <Subhero />
        <Mission />
        <Footer />
      </div>
    </div>
  );
}
export default App;
