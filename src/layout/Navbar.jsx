import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const NavbarRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from("#head", {
          opacity: 0,
          x: -100,
          duration: 2,
          ease: "ease-in",
        })
        .from("#first", {
          opacity: 0,
          x: 0,
          duration: 0.5,
          ease: "ease-in",
        })
        .from("#second", {
          opacity: 0,
          x: 0,
          duration: 0.5,
          ease: "ease-in",
        });
    });
    return () => ctx.revert();
  });
  return (
    <div className="navbar" ref={NavbarRef}>
      <div className="navbar-container">
        <h1 id="head">DH</h1>
        <ul>
          <li id="first">explore</li>
          <li id="second">vision</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
