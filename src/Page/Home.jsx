import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServicesPage from "../components/ServicesPage";
import CaseStudies from "../components/CaseStudies";
import Process from "../components/Process";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";

import "../index.css";

export default function Home() {
  return (
    <div>
        <Header />
      <HeroSection />
      <ServicesPage />
      <CaseStudies />
      <Process />
      <Team />
      <Testimonial />
      <Contact />
      <Footer />
      
    </div>
  )
}



