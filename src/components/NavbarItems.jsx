"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Image from "next/image";

const Navbaritems = () => {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div>
          <Image src="/Supreme_logos.svg" alt="Logo" width={100} height={50} />
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <button className="bg-blue-500 px-3 py-1 rounded cursor-pointer hover:bg-blue-600">
                Contact Us
              </button>
            </li>
            <li>
              <Image
                className="cursor-pointer"
                src="/bxl-linkedin.svg"
                alt="lindln"
                width={24}
                height={24}
              />
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              <Image src="/translate.svg" alt="lindln" width={24} height={24} />
              <span>ENG</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbaritems;
