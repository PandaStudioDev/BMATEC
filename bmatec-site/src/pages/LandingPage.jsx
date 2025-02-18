import React from "react";
import NavBar from "../components/shared/NavBar";
import HeroSection from "../components/home/HeroSection";
import CTASection from "../components/home/CTASection";
import NosotrosSection from "../components/home/NosotrosSection";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CTASection />
      <NosotrosSection />
      <h1>Landing Page</h1>
    </div>
  );
}

export default LandingPage;
