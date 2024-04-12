"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
// import gsap from "gsap";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules";

import BgMainElement from "./assets/img/hero-element-bg.svg";
import HeroMainElement from "./assets/img/main-element.png";

import TheLayersThumbnail from "./assets/img/the-layers-thumbnail.jpg";
import EliteThumbnail from "./assets/img/elite-training-&-consultancy-thumbnail.jpg";
import ZtiqThumbnail from "./assets/img/ztiq-marine-services-thumbnail.jpg";

import TheMindLogo from "./assets/img/the-mind-logo.svg";
import KlccLogo from "./assets/img/klcc-logo.svg";
import PortalDotaLogo from "./assets/img/dota-portal-logo.svg";
import TakafulLogo from "./assets/img/takaful-malaysia-logo.svg";
import SetiaLogo from "./assets/img/sp-setia-logo.svg";
import TheLayersLogo from "./assets/img/the-layers-logo.svg";
import EliteLogo from "./assets/img/elite-training-and-consultancy-logo.svg";
import AfShipLogo from "./assets/img/af-ship-management-logo.svg";
import SmartXLogo from "./assets/img/smart-x-sdn-bhd-logo.svg";
import RxClickLogo from "./assets/img/rx-click-logo.svg";
import ZtiqLogo from "./assets/img/ztiq-marine-logo.svg";
import PrevBtn from "./components/ui/prevBtn";
import NextBtn from "./components/ui/nextBtn";
import Preloader from "./components/ui/Preloader";
import CopyrightYear from "./components/ui/CopyrightYear";
import ClientItem from "./components/clientItem/ClientItem";

// import PrevBtn from "./component/ui/prevBtn";

export default function Home() {
  // swiper configuration
  useEffect(() => {
    const swiperProjectsHome = new Swiper(".swiper.projects-home", {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1000,
      modules: [Navigation, Autoplay],
      loop: false,
      // autoplay: {
      //   delay: 2000,
      //   disableOnInteraction: true,
      //   pauseOnMouseEnter: true,
      // },
      navigation: {
        nextEl: ".custom-nav-wrapper.projects-home .custom-button-next",
        prevEl: ".custom-nav-wrapper.projects-home .custom-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        1300: {
          slidesPerView: 1,
        },
      },
    });
  }, []); // run this effect only once when the component mounts

  // marquee clients
  // useEffect(() => {
  //   const marquee = document.querySelector(".marquee") as HTMLElement;
  //   if (!marquee) return; // exit early if marquee is null

  //   const marqueeContent = marquee.querySelector(
  //     ".marquee-content"
  //   ) as HTMLElement;
  //   if (!marqueeContent) return; // exit early if marqueeContent is null

  //   // const marqueeItems = Array.from(marquee.querySelectorAll(".marquee-item"));

  //   // Add the class "thisItem" to each element in marqueeItems
  //   // marqueeItems.forEach((item) => {
  //   //   item.classList.add("thisItem");
  //   // });

  //   // calculate total width of marquee content
  //   const marqueeWidth = marquee.offsetWidth;
  //   const contentWidth = marqueeContent.offsetWidth;
  //   const duration = (contentWidth / marqueeWidth) * 30; // speed

  //   // clone marquee items for smooth continuous animation
  //   marqueeContent.innerHTML += marqueeContent.innerHTML;

  //   gsap.to(marqueeContent, {
  //     x: -contentWidth,
  //     duration: duration,
  //     ease: "linear",
  //     repeat: -1,
  //   });
  // }, []);

  return (
    <>
      {/* preloader */}
      {/* <Preloader /> */}
      {/* main content */}
      <main className="main">
        <section className="section hero-section full-height">
          <div className="container">
            <div className="hero-wrap">
              {/* bg element */}
              <div className="overlay-img-parent hero">
                <div className="img-overlay-wrap">
                  <Image src={BgMainElement} alt="Bg Element" priority />
                  <Image src={HeroMainElement} alt="Main Element" priority />
                </div>
              </div>

              {/* big title */}
              <div className="hero-title-wrap">
                <div className="row">
                  <div className="wrap col-5">
                    <div className="hero-title split-first-line">
                      <h1>Frontend Developer &</h1>
                    </div>
                    <div className="hero-title split-sec-line">
                      <h1>Web Designer</h1>
                    </div>
                  </div>
                </div>
              </div>

              {/* bottom group */}
              <div className="bottom-column-wrap">
                {/* marquee client */}
                <div className="section-clients-marquee">
                  <div className="marquee-group clients">
                    <div className="marquee">
                      <div className="marquee-scroll">
                        <div className="marquee-content">
                          <ClientItem
                            src={SmartXLogo}
                            alt="Smart X"
                            name="Smart X"
                          />
                          <ClientItem
                            src={TheMindLogo}
                            alt="The Mind"
                            name="The Mind"
                          />
                          <ClientItem src={KlccLogo} alt="KLCC" name="KLCC" />
                          <ClientItem
                            src={PortalDotaLogo}
                            alt="Portal Dota 2"
                            name="Portal Dota 2"
                          />
                          <ClientItem
                            src={TakafulLogo}
                            alt="Takaful Malaysia"
                            name="Takaful Malaysia"
                          />
                          <ClientItem
                            src={SetiaLogo}
                            alt="Setia Berhad"
                            name="Setia Berhad"
                          />
                          <ClientItem
                            src={TheLayersLogo}
                            alt="The Layers"
                            name="The Layers"
                          />
                          <ClientItem
                            src={EliteLogo}
                            alt="Elite Training and Consultancy"
                            name="Elite Training and Consultancy"
                          />
                          <ClientItem
                            src={AfShipLogo}
                            alt="Af Ship Management"
                            name="Af Ship Management"
                          />
                          <ClientItem
                            src={RxClickLogo}
                            alt="RX Click"
                            name="RX Click"
                          />
                          <ClientItem src={ZtiqLogo} alt="Ztiq" name="Ztiq" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row top">
                  <div className="col-6 top about">
                    <div className="wrap">
                      <div className="general-subtitle">
                        <div className="line-anim">
                          <span className="stripe"></span>
                        </div>
                        <p>about</p>
                      </div>
                      <div className="general-desc">
                        <p>
                          Nazri, a passionate frontend developer and UI/UX
                          designer, focuses on delivering user-centric solutions
                          with proven quality. Proficient in JavaScript, React,
                          and GSAP. Progressively excels in creating captivating
                          animations.
                        </p>
                      </div>
                      <div className="big-name-wrapper">
                        <h2>
                          <span className="split-first-line">Nazri</span>
                          <span className="split-sec-line">Fuad</span>
                        </h2>
                        <div className="year-wrapper">
                          <CopyrightYear />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 top projects">
                    <div className="wrap">
                      <div className="general-subtitle">
                        <div className="line-anim">
                          <span className="stripe"></span>
                        </div>
                        <p>projects</p>
                      </div>
                      <div className="projects-wrapper">
                        <div className="swiper-container projects-home">
                          <div className="swiper projects-home">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide cards-wrap">
                                <Link href="/" className="card-link-wrapper">
                                  <div className="cards-image-wrap">
                                    <Image
                                      src={TheLayersThumbnail}
                                      alt="The Layers"
                                    />
                                  </div>
                                  <div className="cards-desc-wrap">
                                    <div className="cards-title">
                                      <p>the layers</p>
                                    </div>
                                    <div className="cards-tag project-tag">
                                      <p className="small">
                                        UI/UX Design, Web Development,
                                        E-Commerce
                                      </p>
                                    </div>
                                    <div className="cards-btn default-btn main-btn">
                                      <div className="btn-link btn-cta">
                                        <div className="btn-text">
                                          <span className="inner-btn-text">
                                            View
                                          </span>
                                        </div>
                                        <div className="btn-icon">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19.443"
                                            height="19.351"
                                            viewBox="0 0 19.443 19.351"
                                          >
                                            <path
                                              id="Path_17"
                                              data-name="Path 17"
                                              d="M7.865,0l-2,.758-1.8,1.318-1.1,1.733L2.361,5.537l-.774,2.08L0,9.387l.371,2.2.911,2.027.3,2.607,3.249-.611,1.126,2.54,2.076,1.2,2.4-.232,2.25-.048,2.63-.395,1.426-2.266,1.075-1.985.6-2.168.436-2.065-.231-2.219.828-2.491-2.9-.761.286-3.185L14.579.357,12.068,1.1,9.891.664Z"
                                              transform="translate(0)"
                                              fill="#ebebe8"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                              <div className="swiper-slide cards-wrap">
                                <Link href="/" className="card-link-wrapper">
                                  <div className="cards-image-wrap">
                                    <Image
                                      src={EliteThumbnail}
                                      alt="Elite Training"
                                    />
                                  </div>
                                  <div className="cards-desc-wrap">
                                    <div className="cards-title">
                                      <p>elite training and consultancy</p>
                                    </div>
                                    <div className="cards-tag project-tag">
                                      <p className="small">
                                        UI/UX Design, Web Development
                                      </p>
                                    </div>
                                    <div className="cards-btn default-btn main-btn">
                                      <div className="btn-link btn-cta">
                                        <div className="btn-text">
                                          <span className="inner-btn-text">
                                            View
                                          </span>
                                        </div>
                                        <div className="btn-icon">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19.443"
                                            height="19.351"
                                            viewBox="0 0 19.443 19.351"
                                          >
                                            <path
                                              id="Path_17"
                                              data-name="Path 17"
                                              d="M7.865,0l-2,.758-1.8,1.318-1.1,1.733L2.361,5.537l-.774,2.08L0,9.387l.371,2.2.911,2.027.3,2.607,3.249-.611,1.126,2.54,2.076,1.2,2.4-.232,2.25-.048,2.63-.395,1.426-2.266,1.075-1.985.6-2.168.436-2.065-.231-2.219.828-2.491-2.9-.761.286-3.185L14.579.357,12.068,1.1,9.891.664Z"
                                              transform="translate(0)"
                                              fill="#ebebe8"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                              <div className="swiper-slide cards-wrap">
                                <Link href="/" className="card-link-wrapper">
                                  <div className="cards-image-wrap">
                                    <Image
                                      src={ZtiqThumbnail}
                                      alt="ZTIQ Marine"
                                    />
                                  </div>
                                  <div className="cards-desc-wrap">
                                    <div className="cards-title">
                                      <p>ZTIQ Marine</p>
                                    </div>
                                    <div className="cards-tag project-tag">
                                      <p className="small">
                                        UI/UX Design, Web Development
                                      </p>
                                    </div>
                                    <div className="cards-btn default-btn main-btn">
                                      <div className="btn-link btn-cta">
                                        <div className="btn-text">
                                          <span className="inner-btn-text">
                                            View
                                          </span>
                                        </div>
                                        <div className="btn-icon">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19.443"
                                            height="19.351"
                                            viewBox="0 0 19.443 19.351"
                                          >
                                            <path
                                              id="Path_17"
                                              data-name="Path 17"
                                              d="M7.865,0l-2,.758-1.8,1.318-1.1,1.733L2.361,5.537l-.774,2.08L0,9.387l.371,2.2.911,2.027.3,2.607,3.249-.611,1.126,2.54,2.076,1.2,2.4-.232,2.25-.048,2.63-.395,1.426-2.266,1.075-1.985.6-2.168.436-2.065-.231-2.219.828-2.491-2.9-.761.286-3.185L14.579.357,12.068,1.1,9.891.664Z"
                                              transform="translate(0)"
                                              fill="#ebebe8"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            {/* project nav button */}
                            <div className="custom-nav-wrapper projects-home">
                              <div className="btn custom-button-prev">
                                <PrevBtn />
                              </div>
                              <div className="btn custom-button-next">
                                <NextBtn />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
