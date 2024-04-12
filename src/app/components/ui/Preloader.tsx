import React from "react";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  useEffect(() => {
    gsap.to(".preloader-bg-wrapper", {
      duration: 1.5,
      yPercent: -100,
      ease: "power4.inOut",
    });

    gsap.to(".preloader-bg-inner", {
      duration: 1.5,
      delay: 0.1,
      yPercent: 100,
      ease: "power4.inOut",
    });

    gsap.to(".preloader-bg-wrapper-duplicate", {
      duration: 1.7,
      delay: 0.2,
      yPercent: -100,
      ease: "power4.inOut",
    });

    gsap.to(".preloader-bg-inner-duplicate", {
      duration: 1.7,
      delay: 0.2,
      yPercent: 100,
      ease: "power4.inOut",
    });

    gsap.set(".hero-title-wrap .hero-title.split-first-line h1", {
      skewY: 4,
      yPercent: 100,
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
      rotate: 2,
    });

    gsap.to(".hero-title-wrap .hero-title.split-first-line h1", {
      duration: 1.4,
      delay: 0.6,
      yPercent: 0,
      skewY: 0,
      ease: "power4.inOut",
      rotate: 0,
    });

    gsap.set(".hero-title-wrap .hero-title.split-sec-line h1", {
      skewY: 4,
      yPercent: 100,
      ease: "power4.inOut",
      rotate: 2,
    });

    gsap.to(".hero-title-wrap .hero-title.split-sec-line h1", {
      duration: 1.4,
      delay: 0.7,
      yPercent: 0,
      skewY: 0,
      ease: "power4.inOut",
      rotate: 0,
    });

    gsap.set(".navbar-wrapper", {
      opacity: 0,
      ease: "power4.inOut",
    });

    gsap.to(".navbar-wrapper", {
      duration: 1.1,
      delay: 1.1,
      opacity: 1,
      ease: "power4.inOut",
    });

    gsap.set(".hero-section .about .line-anim .stripe", {
      opacity: 0,
      width: 0,
    });

    gsap.to(".hero-section .about .line-anim .stripe", {
      duration: 1.5,
      delay: 0.7,
      opacity: 1,
      width: "calc(100% - 5em)",
      ease: "power4.inOut",
    });

    gsap.set(".hero-section .projects .line-anim .stripe", {
      opacity: 0,
      width: 0,
    });

    gsap.to(".hero-section .projects .line-anim .stripe", {
      duration: 1.5,
      delay: 0.7,
      opacity: 1,
      width: "calc(100% - 7em)",
      ease: "power4.inOut",
    });

    gsap.set(".hero-section .section-clients-marquee", {
      opacity: 0,
    });

    gsap.to(".hero-section .section-clients-marquee", {
      duration: 1.5,
      delay: 0.7,
      opacity: 1,
      ease: "power4.inOut",
    });

    gsap.set(".hero-section .big-name-wrapper h2 .split-first-line", {
      opacity: 0,
      scale: 1.1,
    });

    gsap.to(".hero-section .big-name-wrapper h2 .split-first-line", {
      duration: 1.4,
      delay: 0.8,
      opacity: 1,
      scale: 1,
      ease: "power4.inOut",
    });

    gsap.set(".hero-section .big-name-wrapper h2 .split-sec-line", {
      skewY: 4,
      yPercent: -100,
      ease: "power4.inOut",
      rotate: 2,
    });

    gsap.to(".hero-section .big-name-wrapper h2 .split-sec-line", {
      duration: 1.4,
      delay: 0.8,
      skewY: 0,
      yPercent: 0,
      rotate: 0,
      ease: "power4.inOut",
    });

    gsap.set(".hero-section .year-wrapper", {
      opacity: 0,
    });

    gsap.to(".hero-section .year-wrapper", {
      duration: 1.5,
      delay: 0.7,
      opacity: 1,
      ease: "power4.inOut",
    });

    
    // Remove preloader after animation
    // Calculate the total duration of all animations
    // const totalDuration = 1.5 + 1.5 + 1.7 + 1.7 + 1.8 + 0.5;

    // Remove preloader after animation
    // setTimeout(function () {
    //   var loadingPreload = document.getElementsByClassName("loading");
    //   if (loadingPreload.length > 0) {
    //     loadingPreload[0].classList.add("removePreloader");
    //   }
    // }, totalDuration * 1000); // Convert duration to milliseconds
  }, []);

  return (
    <div className="preloader-wrapper">
      <div className="preloader-bg-wrapper">
        <div className="preloader-bg-inner">
          <div className="preloader-bg"></div>
        </div>
      </div>
      <div className="preloader-bg-wrapper-duplicate">
        <div className="preloader-bg-inner-duplicate">
          <div className="preloader-bg main-bg"></div>
        </div>
      </div>
    </div>
  );
}
