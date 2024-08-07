"use client";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import MainLogo from "../logo/page";

import ScrollingTextImg from "../../assets/img/scrolling-cta-text.svg";
import Contact from "../contact/Contact";

export default function Header() {
  const [showContactPopup, setShowContactPopup] = useState(false);

  const toggleContactPopup = () => {
    setShowContactPopup(!showContactPopup);
  };

  return (
    <>
      <header className="header section nav-mobile-not-active">
        <div id="navbar" className="navbar">
          <div className="navbar-wrapper">
            <div className="left-navbar">
              <div className="btn-link btn-nav-home">
                <Link href="/" className="default-btn-click">
                  <MainLogo />
                </Link>
              </div>
              <div className="default link-navbar-wrapper">
                <ul className="link-desktop link-desktop-main">
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/nazrifuad/"
                      target="_blank"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/nazrifuad/"
                      target="_blank"
                    >
                      Resume
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-navbar link-navbar-wrapper">
              <ul className="link-desktop link-desktop-right">
                <div className="scrolling-cta-wrapper">
                  <li>
                    <Link href="#" onClick={toggleContactPopup}>
                      <Image
                        src={ScrollingTextImg}
                        alt="Nazri Fuad"
                        style={{ width: "100%", height: "auto" }}
                      />
                      <div className="text">Book</div>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* conditionally render the contact page component */}
      {showContactPopup && <Contact onClose={toggleContactPopup} />}
    </>
  );
}
