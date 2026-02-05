import React from "react";
import "../styles/footer.css";
import logo from "../assets/brand-logo-colorized.jpg";

const Footer = () => {
const scrollToSection = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <a
            href="#"
            className="social-link"
            onClick={() => scrollToSection("home")}
          >
            <img src={logo} href="" className="footer-logo-image" />
          </a>
        </div>
        <div className="footer-right">
          <div className="nav-links">
            <a href="#home" onClick={(e) => scrollToSection(e, "home")}>Home</a>
<a href="#about" onClick={(e) => scrollToSection(e, "about")}>About</a>
<a href="#services" onClick={(e) => scrollToSection(e, "services")}>Products</a>
<a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>Projects</a>
<a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>Contact Us</a>

            {/*<a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Products</a>
            <a href="#projects">Projects</a>*/}
            {/*<a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact Us</a>*/}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © Spacesio 2026 - 2/6, 4th Main Rd,
          Mahalakshmi Nagar, Adambakkam, Chennai
        </p>
        <p>Spacesio | The Designer Studio</p>
      </div>
    </footer>
  );
};

export default Footer;
