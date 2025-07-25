import React from "react";
import AboutHero from "./AboutHero";
import AboutOverview from "./AboutOverview";
import SustainableEnergySection from "./SustainableEnergySection";
import TeamSection from "../TeamSection/TeamSection";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import BlogSection from "../Blog/BlogSection";
import OurMission from "./OurMission";
import New from "./New";
const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutOverview />
      <New/>
      <OurMission />
      <SustainableEnergySection />
      <TeamSection />
      <TestimonialSection />
      <BlogSection />
    </div>
  );
};

export default About;
