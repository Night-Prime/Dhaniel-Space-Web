import React, { useLayoutEffect, useRef } from "react";
import "./mission.css";
import photo1 from "../../img/ellie-ellien-KH0CwR1y2hk-unsplash.jpg";
import photo2 from "../../img/_.jpeg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Mission = () => {
  const missionRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const scroll = gsap.fromTo(
        ".head, .txt",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".head",
            start: "top 80%",
          },
        }
      );
      let scroll2 = gsap.fromTo(
        textRef.current.childNodes,
        {
          y: "+=20",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            end: "bottom 30%",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  });
  return (
    <div className="mission" ref={missionRef}>
      <div className="mission-container">
        <div className="text">
          <h1 className="head">Mission</h1>
          <p className="txt" ref={textRef}>
            <span>
              At Dhaniel 'Space, we strive to create a space where creativity
              and comfort intersect.{" "}
            </span>
            <span>
              We believe that inclusivity and diversity are essential components
              of the creative process, and we are committed to promoting them in
              all aspects of our work.{" "}
            </span>
            <span>
              Our minimalist aesthetics reflect our belief that simplicity and
              elegance are the foundation of great design.{" "}
            </span>
            <span>
              We are dedicated to supporting and inspiring creatives from all
              backgrounds and disciplines to pursue their passions and achieve
              their goals.
            </span>
          </p>
        </div>
        <div className="img">
          <img className="img-1" src={photo1} alt={photo1} />
          <img className="img-2" src={photo2} alt={photo2} />
        </div>
      </div>
    </div>
  );
};

export default Mission;
