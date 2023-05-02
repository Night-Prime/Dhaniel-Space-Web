import React, { useLayoutEffect, useRef } from "react";
import "./homepage.css";
import gsap from "gsap";
import photo1 from "../../img/thanos-pal-lPZZXH9sjZU-unsplash.jpg";
import photo2 from "../../img/rayul-_M6gy9oHgII-unsplash.jpg";

const Homepage = () => {
  const HomeRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap
        .timeline()
        .from("#txt1", {
          opacity: 0,
          x: -500,
          duration: 2,
          ease: "ease-in",
          delay: 0,
        })
        .from("#img2", {
          opacity: 0,
          y: -500,
          duration: 2,
          ease: "ease-in",
          delay: 0,
        });

      let tl2 = gsap
        .timeline()
        .from("#txt2", {
          opacity: 0,
          x: 500,
          duration: 2,
          ease: "ease-in",
          delay: 0,
        })
        .from("#img1", {
          opacity: 0,
          y: 500,
          duration: 2,
          ease: "ease-in",
          delay: 0,
        });
    });
    return () => ctx.revert();
  });
  return (
    <div className="homepage" ref={HomeRef}>
      <div className="header">
        <h1 id="txt1">Dhaniel</h1>
        <img id="img1" src={photo1} alt={photo1} loading="lazy" />
        <h1 id="txt2">'Space.</h1>
        <img id="img2" src={photo2} alt={photo2} loading="lazy" />
      </div>
    </div>
  );
};

export default Homepage;
