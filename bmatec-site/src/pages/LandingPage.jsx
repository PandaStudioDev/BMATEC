import React from "react";
import NavBar from "../components/shared/NavBar";
import HeroSection from "../components/home/HeroSection";
import CTASection from "../components/home/CTASection";
import NosotrosSection from "../components/home/NosotrosSection";
import Diferenciadores from "../components/home/Diferenciadores";
import ClientesSection from "../components/home/ClientesSection";
import Footer from "../components/shared/Footer";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CTASection />
      <NosotrosSection />
      <Diferenciadores />
      <ClientesSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
