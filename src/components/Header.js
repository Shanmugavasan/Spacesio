import React, { useState } from "react";
import "../styles/Header.css";
import brandlogo from "../assets/brand-logo.png"; // Ensure this path is correct

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const scrollToSection = (e, id) => {
  e.preventDefault();

  // 🔥 reset URL to root (without reload)
  const basePath = window.location.pathname.split("/contact-us")[0];
  window.history.replaceState({}, "", basePath || "/");

  const element = document.getElementById(id);
  if (!element) return;

  const offset = id === "about" ? 100 : 10;
  const y =
    element.getBoundingClientRect().top +
    window.pageYOffset -
    offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });

  setIsMenuOpen(false);
};

  
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a
  href="#home"
  className="logo"
  onClick={(e) => scrollToSection(e, "home")}
>
  <img src={brandlogo} alt="Brand Logo" className="header-logo" />
</a>

        {/*<a href="#" className="logo" onClick={() => scrollToSection("home")}>
          <img src={brandlogo} alt="Brand Logo" className="header-logo" />
        </a>*/}

        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <a href="#home" onClick={(e) => scrollToSection(e, "home")}>Home</a>
<a href="#about" onClick={(e) => scrollToSection(e, "about")}>About</a>
<a href="#services" onClick={(e) => scrollToSection(e, "services")}>Products</a>
<a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>Projects</a>
<a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>Contact Us</a>
{/*
            <li>
              <a href="#home" onClick={() => scrollToSection("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => scrollToSection("about")}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => scrollToSection("services")}>
                Products
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => scrollToSection("projects")}>
                Projects
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={() => scrollToSection("testimonials")}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                Contact Us
              </a>
            </li>*/}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
