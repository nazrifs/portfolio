"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

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

// export function getCurrentYear() {
//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();
//   return currentYear;
// }

export default function Home() {
  // display current year
  // const currentYear = getCurrentYear();

  // swiper configuration
  useEffect(() => {
    const swiperProjectsHome = new Swiper(".swiper.projects-home", {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1000,
      modules: [Navigation, Autoplay],
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
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
  useEffect(() => {
    const marquee = document.querySelector(".marquee") as HTMLElement;
    if (!marquee) return; // exit early if marquee is null

    const marqueeContent = marquee.querySelector(".marquee-content") as HTMLElement;
    if (!marqueeContent) return; // exit early if marqueeContent is null

    // const marqueeItems = Array.from(marquee.querySelectorAll(".marquee-item"));

    // Add the class "thisItem" to each element in marqueeItems
    // marqueeItems.forEach((item) => {
    //   item.classList.add("thisItem");
    // });

    // calculate total width of marquee content
    const marqueeWidth = marquee.offsetWidth;
    const contentWidth = marqueeContent.offsetWidth;
    const duration = (contentWidth / marqueeWidth) * 30; // speed

    // clone marquee items for smooth continuous animation
    marqueeContent.innerHTML += marqueeContent.innerHTML;

    gsap.to(marqueeContent, {
      x: -contentWidth,
      duration: duration,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
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
            <div className="hero-title">
              <div className="row">
                <div className="col-5">
                  <h1>Frontend Developer & Web Designer</h1>
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
                        <div className="marquee-item">
                          <Image src={SmartXLogo} alt="Smart X" priority />
                          <span>Smart X</span>
                        </div>
                        <div className="marquee-item">
                          <Image src={TheMindLogo} alt="The Mind" priority />
                          <span>The Mind</span>
                        </div>
                        <div className="marquee-item">
                          <Image src={KlccLogo} alt="KLCC" priority />
                          <span>KLCC</span>
                        </div>
                        <div className="marquee-item">
                          <Image src={PortalDotaLogo} alt="Portal Dota 2" priority />
                          <span>Dota2</span>
                        </div>
                        <div className="marquee-item">
                          <Image src={TakafulLogo} alt="Takaful Malaysia" priority />
                          <span>Takaful Malaysia</span>
                        </div>
                        <div className="marquee-item">
                          <Image src={SetiaLogo} alt="Setia Berhad" priority />
                          <span>Setia Berhad</span>
                        </div>
                        <div className="marquee-item">
                          <Image src={TheLayersLogo} alt="The Layers" priority />
                          <span>The Layers</span>
                        </div>
                        <div className="marquee-item">
                          <Image src={EliteLogo} alt="Elite Training and Consultancy" priority />
                          <span>Elite Training</span>
                        </div>
                        <div className="marquee-item">
                          <Image src={AfShipLogo} alt="Af Ship Management" priority />
                          <span>Af Ship</span>
                        </div>
                        <div className="marquee-item">
                          <Image src={RxClickLogo} alt="RX Click" priority />
                          <span>RX Click</span>
                        </div>
                        <div className="marquee-item">
                          <Image src={ZtiqLogo} alt="Ztiq" priority />
                          <span>Ztiq</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row top">
                <div className="col-6 top about">
                  <div className="wrap">
                    <div className="general-subtitle">
                      <p>about</p>
                    </div>
                    <div className="general-desc">
                      <p>
                        Nazri, a passionate frontend developer and UI/UX designer, focuses on delivering user-centric solutions with proven quality. Proficient in JavaScript, React, and GSAP.
                        Progressively excels in creating captivating animations.
                      </p>
                    </div>
                    <div className="big-name-wrapper">
                      <h2>
                        <span>Nazri</span>
                        <span>Fuad</span>
                      </h2>
                      <div className="year-wrapper">
                        © <span>2024</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 top projects">
                  <div className="wrap">
                    <div className="nav-wrap">
                      {/* title */}
                      <div className="general-subtitle">
                        <p>projects</p>
                      </div>
                      {/* project nav button */}
                      <div className="custom-nav-wrapper projects-home">
                        <div className="btn custom-button-prev">
                          <svg id="Group_16" data-name="Group 16" xmlns="http://www.w3.org/2000/svg" width="50" height="39" viewBox="0 0 50 39">
                            <rect id="Rectangle_4" data-name="Rectangle 4" width="50" height="39" fill="#6b6b6b" />
                            <g id="arrow-right-outline" transform="translate(8.669 12.373)">
                              <path
                                id="Path_15"
                                data-name="Path 15"
                                d="M56.344,96.019,24,96"
                                transform="translate(-23.681 -88.876)"
                                fill="none"
                                stroke="#ebebe8"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                              <path
                                id="Path_16"
                                data-name="Path 16"
                                d="M122.648,54.254,112.1,47.127,122.648,40"
                                transform="translate(-112.1 -40)"
                                fill="none"
                                stroke="#ebebe8"
                                strokeLinejoin="bevel"
                                strokeWidth="2"
                              />
                            </g>
                          </svg>
                        </div>
                        <div className="btn custom-button-next">
                          <svg id="Group_18" data-name="Group 18" xmlns="http://www.w3.org/2000/svg" width="50" height="39" viewBox="0 0 50 39">
                            <rect id="Rectangle_4" data-name="Rectangle 4" width="50" height="39" fill="#6b6b6b" />
                            <g id="arrow-right-outline" transform="translate(8.669 12.373)">
                              <path id="Path_15" data-name="Path 15" d="M24,96.019,56.344,96" transform="translate(-24 -88.876)" fill="none" stroke="#ebebe8" strokeLinejoin="round" strokeWidth="2" />
                              <path
                                id="Path_16"
                                data-name="Path 16"
                                d="M112.1,54.254l10.548-7.127L112.1,40"
                                transform="translate(-89.986 -40)"
                                fill="none"
                                stroke="#ebebe8"
                                strokeLinejoin="bevel"
                                strokeWidth="2"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="projects-wrapper">
                      <div className="swiper-container projects-home">
                        <div className="swiper projects-home">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide cards-wrap">
                              <Link href="/" className="card-link-wrapper">
                                <div className="cards-image-wrap">
                                  <Image src={TheLayersThumbnail} alt="The Layers" />
                                </div>
                                <div className="cards-desc-wrap">
                                  <div className="cards-title">
                                    <p>the layers</p>
                                  </div>
                                  <div className="cards-tag project-tag">
                                    <p className="small">UI/UX Design, Web Development, E-Commerce</p>
                                  </div>
                                  <div className="cards-btn default-btn main-btn">
                                    <div className="btn-link btn-cta">
                                      <div className="btn-text">
                                        <span className="inner-btn-text">View</span>
                                      </div>
                                      <div className="btn-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19.443" height="19.351" viewBox="0 0 19.443 19.351">
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
                                  <Image src={EliteThumbnail} alt="Elite Training" />
                                </div>
                                <div className="cards-desc-wrap">
                                  <div className="cards-title">
                                    <p>elite training and consultancy</p>
                                  </div>
                                  <div className="cards-tag project-tag">
                                    <p className="small">UI/UX Design, Web Development</p>
                                  </div>
                                  <div className="cards-btn default-btn main-btn">
                                    <div className="btn-link btn-cta">
                                      <div className="btn-text">
                                        <span className="inner-btn-text">View</span>
                                      </div>
                                      <div className="btn-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19.443" height="19.351" viewBox="0 0 19.443 19.351">
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
                                  <Image src={ZtiqThumbnail} alt="ZTIQ Marine" />
                                </div>
                                <div className="cards-desc-wrap">
                                  <div className="cards-title">
                                    <p>ZTIQ Marine</p>
                                  </div>
                                  <div className="cards-tag project-tag">
                                    <p className="small">UI/UX Design, Web Development</p>
                                  </div>
                                  <div className="cards-btn default-btn main-btn">
                                    <div className="btn-link btn-cta">
                                      <div className="btn-text">
                                        <span className="inner-btn-text">View</span>
                                      </div>
                                      <div className="btn-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19.443" height="19.351" viewBox="0 0 19.443 19.351">
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
  );
}
