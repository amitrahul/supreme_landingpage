import React from "react";

const HeroSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center text-white w-full h-screen"
      style={{ background: "rgba(0, 0, 0, 0.6)" }}
    >
      <p className="text-xl mb-10">Performance in motion</p>
      <span className="font-bold text-3xl mb-2">
        Soft Trims and NVH Solutions
        <br />
        <span className="font-normal text-xl">for seamless rides</span>
      </span>
    </div>
  );
};

export default HeroSection;
