import React from "react";
import Typed from "react-typed";
import "../index.css";

const Home = () => {
  return (
    <div className="hero-container max-w-[1640px] md:h-[700px]  w-full h-screen mx-auto text-center flex flex-col justify-center text-white">
      <div className="max-w-[1240px]  w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="md:text-2xl sm:text-xl font-thin p-5 text-[#ebb000]">
          Breaking Barriers, Unleashing Potentials
        </p>
        <h1 className="mx-4 md:text-7xl sm:text-5xl text-4xl font-bold">
          Welcome to
          <Typed
            className="mx-4 md:text-7xl sm:text-5xl text-4xl font-bold text-[#ebb000]"
            strings={["BERHAN", "BERHAN"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </h1>

        <div className="md:w-[650px] mx-auto p-10 text-gray-400 sm:w-[500px]  w-[350px]">
          <p>
            Elevating education accessibility with an innovative digital platform
            tailored for visually impaired individuals, bridging gaps, and
            empowering learning for a brighter future.
          </p>
          <button className="bg-black w-[200px] border border-[#ebb000] rounded-md font-bold my-10 mx-auto py-3 text-[#ebb000]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
