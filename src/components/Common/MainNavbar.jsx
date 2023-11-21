import useClickOutside from "@/hooks/useClickOutside";
import Link from "next/link";
import { useEffect, useRef } from "react";

function MainNavbar({ mainBg, subBg, noStatic, curve }) {
  const ref = useRef();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useClickOutside(ref, () => {
    document.querySelector(".navbar .navbar-collapse").classList.remove("show");
  });



  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar?.classList.remove("nav-scroll");
  }

  function toggleNavbar() {
    document.querySelector(".navbar .navbar-collapse").classList.toggle("show");
  }

  return (
    <nav
      ref={ref}
      className={`navbar navbar-expand-lg ${curve ? "nav-crev" : ""} ${noStatic ? "" : "static"} ${mainBg ? "main-bg" : ""} ${subBg ? "sub-bg" : ""}`}
    >
      <div className="container">
        <Link className="logo icon-img-120" href="/">
          <img src="/dark/assets/imgs/logo-light.png" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={"nav-link"} href="#home-service">
                <span className="rolling-text">Service</span>
              </a>
            </li>

            <li className="nav-item">
              <a className={"nav-link"} href="#home-about">
                <span className="rolling-text">About</span>
              </a>
            </li>
            <li className="nav-item">
              <a className={"nav-link"} href="#home-portfolio">
                <span className="rolling-text">Portfolio</span>
              </a>
            </li>
            <li className="nav-item">
              <a className={"nav-link"} href="#home-resume">
                <span className="rolling-text">Resume</span>
              </a>
            </li>
            <li className="nav-item">
              <a className={"nav-link"} href="#home-contact">
                <span className="rolling-text">Contact</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-item-contact-btn">
          <a href="https://www.linkedin.com/in/sazzaddesign/" target="_blank" className={`butn butn-md butn-bord radius-30 `}>
            <span>Linkedin</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
