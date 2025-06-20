import React from "react";

import Hero from "./Components/Home/Hero";
import SecondSection from "./Components/Home/SecondSection";
import ReasonsSection from "./Components/Home/ReasonsSection";
import FixedBackgroundSection from "./Components/Home/FixedBackgroundSection";
import ProjectsShowcase from "./Components/Home/ProjectsShowcase";
import TeamSection from "./Components/Home/TeamSection";
import TestimonialSection from "./Components/Home/TestimonialSection";
import BlogSection from "./Components/Home/BlogSection";
import Footer from "./Components/Home/Footer";
import AboutCompany from "./Components/Home/AboutCompany";

function App() {
  return (
    <>
      <Hero />
      <SecondSection />
      <AboutCompany/>
      <ReasonsSection />
      <FixedBackgroundSection />
      <ProjectsShowcase />
      <TeamSection />
      <TestimonialSection />
      <BlogSection />
      <Footer />
      
    </>
  );
}

export default App;
