import React from "react";
import "../styles/About.css"; // Ensure to import the CSS file
import Process from "./processPanel";
import img from "../assets/Grid2.jpeg"; // Replace with your image
import img2 from "../assets/Grid4.jpg"; // Replace with your image

const About = () => {
  return (
    <div className="about-section" id="about">
      <section className="about-container">
        <div className="about-grid">
          {/* Left Image */}
          <div className="image-container">
            <img src={img} alt="About the company" className="about-image" />
          </div>

          {/* Center Content */}
          <div className="about-content">
            <div className="content-wrapper">
              <p className="about-subtitle">ABOUT US</p>
              <p className="about-description">
                Spacesio Design Studio is an interior design company based in
                Chennai, where we specialize in creating beautiful, functional
                spaces that reflect the unique values and aspirations of our
                clients.
              </p>
              <p className="about-description">
                Whether transforming a cozy home or a dynamic commercial space,
                we blend creativity, quality, and personal expression to craft
                environments that truly feel like home. With expertise in color,
                texture, lighting, and layout, we turn every project into a
                timeless masterpiece to enhance daily living and inspires all
                who experience it.
              </p>
              <p className="about-description">
                Our designs reflect the values and ideas our customers hold
                closest to their hearts! Looking for home interiors, bedroom
                interiors, kitchen interiors, or designs for your office space?
                Get them all expertly crafted under one roof.
              </p>
              <p className="about-description">
                With Spacesio’s turnkey interior design services, we guarantee a
                seamless process all the way to handover.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="image-container">
            <img src={img2} alt="Design concept" className="about-image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
