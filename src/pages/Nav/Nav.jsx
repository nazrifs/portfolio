import React from "react";
import { NavLink, useLocation } from "react-router-dom"
import MainLogo from '../../components/Logo/MainLogo'
import MainLink from "../../components/Icons/MainLink";


const Nav = () => {

  // active nav function
  const location = useLocation();
  const isNavLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className="header section nav-mobile-not-active">
        <div id="navbar" className="navbar">
          <div className="navbar-wrapper">
            <div className="left-navbar">
              <div className="btn-link btn-nav-home">
                <NavLink to="/" className={`default-btn-click ${isNavLinkActive('/') ? 'active-link' : ''}`}>
                  <MainLogo />
                </NavLink>
              </div>
            </div>
            <div className="right-navbar link-navbar-wrapper">
              <ul className="link-desktop link-desktop-right">
                <li>
                  <NavLink to="https://www.linkedin.com/in/nazrifuad/" target="_blank" className={isNavLinkActive('https://www.linkedin.com/in/nazrifuad/') ? 'active-link' : ''}>LinkedIn</NavLink>
                  <MainLink />
                </li>
                <li className="upload-nav-btn">
                  <NavLink to="tel: +60195362265" className={isNavLinkActive('tel: +60195362265') ? 'active-link' : ''}>Contact</NavLink>
                  <MainLink />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Nav
