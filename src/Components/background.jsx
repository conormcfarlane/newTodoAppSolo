import React from "react";
// Images
import bgDesktopDark from "../images/bg-desktop-dark.jpg";
import bgDesktopLight from "../images/bg-desktop-light.jpg";
import bgMobileDark from "../images/bg-mobile-dark.jpg";
import bgMobileLight from "../images/bg-mobile-light.jpg";

export default function () {
  return (
    <div>
      {/* Mobile Light */}
      <img
        src={bgMobileLight}
        alt=""
        className="block md:hidden dark:hidden absolute top-0 left-0 w-full h-[35vh] object-cover z-0"
      />
      {/* Mobile Dark */}
      <img
        src={bgMobileDark}
        alt=""
        className="hidden dark:block md:hidden absolute top-0 left-0 w-full h-[35vh] object-cover z-0"
      />
      {/* Desktop Light */}
      <img
        src={bgDesktopLight}
        alt=""
        className="hidden md:block dark:hidden absolute top-0 left-0 w-full h-[35vh] object-cover z-0"
      />
      {/* Desktop Dark */}
      <img
        src={bgDesktopDark}
        alt=""
        className="hidden md:block dark:block absolute top-0 left-0 w-full h-[35vh] object-cover z-0"
      />
    </div>
  );
}
