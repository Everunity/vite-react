import React from "react";
import Hero from "./Hero";
import SecondSection from "./SecondSection";
import ReasonsSection from "./ReasonsSection";
import FixedBackgroundSection from "./FixedBackgroundSection";
import ProjectsShowcase from "../Projects/ProjectsShowcase";
import TeamSection from "../TeamSection/TeamSection";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import BlogSection from "../Blog/BlogSection";

import AboutCompany from "./AboutCompany";
const Home = () => {
  return (
    <>
    {/* compnents */}
      <Hero />
      <SecondSection />
      <AboutCompany />
      <ReasonsSection />
      <FixedBackgroundSection />
      <ProjectsShowcase />
      <TeamSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
};

export default Home;
