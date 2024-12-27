import React from "react";
import "../styles/About.css"; // Ensure to import the CSS file
import img from "../assets/Abinaya's Residence/2.jpg";

const About = () => {
  const playfairStyle = {
    fontFamily: "'Playfair Display', serif",
  };

  return (
    <section className="about-container" id="about">
      <div className="about-top">
        <div className="about-image">
          <img src={img} alt="" />
        </div>
        <div className="about-text">
          <h2 className="about-header" style={playfairStyle}>
            About Us
          </h2>

          <p className="about-description" style={playfairStyle}>
            {/*At <strong>Spacesio</strong>, we believe that every space tells a
            story. Our mission is to weave art, functionality, and design to
            create spaces that not only look stunning but feel like home. From
            residential to commercial, our designs are customized to fit the
            unique needs and personalities of our clients.*/}
            Spacesio Design Studio is an interior design company, based out of
            Chennai. We design beautiful homes while focusing on functionality
            for everyday living. Our designs reflect the values and ideas our
            customers hold closest to their hearts!
            <br />
            Looking for home interiors, bedroom interiors, kitchen interiors, or
            designs for your office space or studio? Get them all expertly
            crafted under one roof.
            <br />
            Provide us with any space and any style, and we'll design it to
            perfectly align with your needs and budget.
            <br />
            With Spacesio’s turnkey interior design services, we guarantee a
            smooth and seamless process all the way to handover.
          </p>
        </div>
      </div>
      {/*
<div className="about-philosophy">
        <h3>About the Founder</h3>
        <p>
          Design is more than just space creation; it’s the art of shaping
          immersive environments. With mastery of color, texture, lighting, and
          layout, Every design element is an opportunity for unique expression.
          Whether transforming an office, a home, or a creative space. Our
          holistic approach transforms mundane spaces into extraordinary
          canvases of personal expression.
        </p>
      </div>
      */}
    </section>
  );
};

export default About;
