import React, { useLayoutEffect, useRef } from "react";
import "./footer.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Footer = () => {
  const locationRef = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const location = locationRef.current;
    const lines = location.querySelectorAll(".lineChildren");

    gsap.set(lines, { y: 200 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".location",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    tl.fromTo(
      lines,
      { y: 200 },
      {
        duration: 1,
        y: 0,
        stagger: 0.1,
        ease: "power2",
      }
    );
  }, []);
  return (
    <div className="location" ref={locationRef}>
      <h1 className="lineParent">
        <span className="lineChildren">MADE IN LAGOS</span>
      </h1>
    </div>
  );
};

export default Footer;
