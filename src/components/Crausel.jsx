"use client";
import { motion } from "motion/react";
import React from "react";
import { Carousel } from "@/components/ui/carousel";

const Crausel = () => {
  const images = [
    "/Front.svg",
    "/Commercial.svg",
    "/Exterior.svg",
    "/PassengerAlpha1.svg",
    "/Trunk.svg",
  ];
  const slideData = [
    {
      title: "Front Whispers",
      button: "Front Component",
      src: "/Front.svg",
    },
    {
      title: "Commercial Dreams",
      button: "Commercial Component",
      src: "/Commercial.svg",
    },
    {
      title: "Exterior Nights",
      button: "Exterior Component",
      src: "/Exterior.svg",
    },
    {
      title: "PassengerAlpha1 Whispers",
      button: "PassengerAlpha1 Component",
      src: "/PassengerAlpha1.svg",
    },
    {
      title: "Trunk Whispers",
      button: "Trunk Component",
      src: "/Trunk.svg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
};

export default Crausel;
