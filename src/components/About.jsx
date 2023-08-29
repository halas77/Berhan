import React from "react";
import logo from "../assets/logo.jpg";

const About = () => {
  return (
    <div className="w-full bg-gray-100 py-10 px-4">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2 md:h-[620px]">
        <img className=" shadow-xl hover:scale-105 duration-300 hidden md:flex w-[400px] md:mt-20 mx-auto my-4" src={logo} alt="Logo Image" />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold p-2">
            About Us
          </h1>
          <p>
            In response to Ethiopia's pressing need for inclusive education, our
            project, the "Inclusive Learning and Examination Platform,"
            endeavors to revolutionize the educational landscape for visually
            impaired individuals. With approximately 1.6 million people living
            with blindness in Ethiopia, our platform aims to bridge the
            accessibility gap by providing a comprehensive learning and
            examination environment tailored to their unique needs. Through
            cutting-edge technologies like text-to-speech, tactile diagrams, and
            AI-driven question-answering, we offer an unparalleled educational
            experience. Our platform's diverse course offerings, interactive
            study materials, adaptive examination interface, and community
            engagement features empower visually impaired learners to access
            quality education and achieve their full potential. By breaking down
            barriers and fostering inclusivity, we aspire to reshape the
            narrative of education for the visually impaired, offering them a
            path to independence, empowerment, and success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
