import React, { useState } from "react";
import "../styles/Header.css";
import brandlogo from "../assets/brand-logo.png"; // Ensure this path is correct

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust this value to scroll higher or lower
      const elementPosition = element.offsetTop;
      const scrollToPosition = elementPosition - offset;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo" onClick={() => scrollToSection("home")}>
          <img src={brandlogo} alt="Brand Logo" className="header-logo" />
        </a>

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
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
