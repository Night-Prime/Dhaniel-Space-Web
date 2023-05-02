import React, { useLayoutEffect, useRef } from "react";
import "./subhero.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import small from "../../img/good-faces-2eC_-0yRrGU-unsplash.jpg";
import big from "../../img/mark-adriane-bO3S03I2Aw8-unsplash.jpg";

const Subhero = () => {
  const subRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const scroll = gsap.fromTo(
        ".txt1",
        {
          x: -1300,
          opacity: 1,
        },
        {
          x: 1300,
          opacity: 1,
          duration: 8,
          ease: "ease-in-out",
          repeat: -1, // repeat animation indefinitely
        }
      );
      const scroll1 = gsap.fromTo(
        ".txt3",
        {
          x: 1300,
          opacity: 1,
        },
        {
          x: -1300,
          opacity: 1,
          duration: 8,
          ease: "ease-in-out",
          repeat: -1, // repeat animation indefinitely
        }
      );
    });

    // cleanup function
    return () => {
      ctx.revert();
    };
  });

  return (
    <div className="subhero" ref={subRef}>
      <div className="subhero-container">
        <h1 className="txt1">Creativity</h1>
        <h1 className="txt2">Meets</h1>
        <h1 className="txt3">Comfort</h1>
        <img src={small} alt={small} className="small" />
        <img src={big} alt={big} className="big" />
      </div>
    </div>
  );
};

export default Subhero;
