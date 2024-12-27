import React from "react";
import "../styles/About.css"; // Ensure to import the CSS file
import Process from "./processPanel";
import img from "../assets/Grid2.jpeg"; // Replace with your image
import img2 from "../assets/Grid4.jpg"; // Replace with your image

const About = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Image */}
        <div className="overflow-hidden h-96">
          <img
            src={img}
            alt="About the company"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col justify-center items-center text-center px-4">
          <div className="max-w-md">
            <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">
              ABOUT US
            </p>
            <h2 className="text-3xl font-serif mb-4">Our Design Philosophy</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Spacesio Design Studio is an interior design company based in
              Chennai, where we specialize in creating beautiful, functional
              spaces that reflect the unique values and aspirations of our
              clients.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Whether transforming a cozy home or a dynamic commercial space, we
              blend creativity, quality, and personal expression to craft
              environments that truly feel like home. With expertise in color,
              texture, lighting, and layout, we turn every project into a
              timeless masterpiece to enhance daily living and inspires all who
              experience it.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Our designs reflect the values and ideas our customers hold
              closest to their hearts! Looking for home interiors, bedroom
              interiors, kitchen interiors, or designs for your office space ?
              Get them all expertly crafted under one roof.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              With Spacesio’s turnkey interior design services, we guarantee a
              seamless process all the way to handover.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="overflow-hidden h-96">
          <img
            src={img2}
            alt="Design concept"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;