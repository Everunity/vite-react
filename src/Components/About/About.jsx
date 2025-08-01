import React from "react";
import AboutHero from "./AboutHero";
import AboutOverview from "./AboutOverview";
import SustainableEnergySection from "./SustainableEnergySection";
import TeamSection from "../TeamSection/TeamSection";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import BlogSection from "../Blog/BlogSection";
import OurMission from "./OurMission";
import Helmet from "react-helmet";
import New from "./New";
const About = () => {
  return (
    <>
      <Helmet>
        <title>About Everunity Services | Solar Experts in Nagpur</title>
        <meta
          name="description"
          content="Learn about Everunity Services, Nagpur’s trusted provider of solar panel installation, maintenance, and eco-friendly energy solutions."
        />
        <link rel="canonical" href="https://everunityservices.com/about" />

        {/* Open Graph (OG) tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="About Everunity Services | Solar Experts in Nagpur"
        />
        <meta
          property="og:description"
          content="Learn about Everunity Services, Nagpur’s trusted provider of solar panel installation, maintenance, and eco-friendly energy solutions."
        />
        <meta property="og:url" content="https://everunityservices.com/about" />
        <meta property="og:site_name" content="EverUnityServices" />
        <meta
          property="og:image"
          content="https://everunityservices.com/images/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="629" />

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nmcgovnr" />
        <meta
          name="twitter:title"
          content="About Everunity Services | Solar Experts in Nagpur"
        />
        <meta
          name="twitter:description"
          content="Learn about Everunity Services, Nagpur’s trusted provider of solar panel installation, maintenance, and eco-friendly energy solutions."
        />
        <meta
          name="twitter:image"
          content="https://everunityservices.com/images/og-image.jpg"
        />

        {/* Structured Data - Schema.org */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "About Everunity Services | Solar Experts in Nagpur",
        "author": {
          "@type": "Person",
          "name": "Everunity Services"
        },
        "datePublished": "2023-09-05",
        "dateModified": "2023-09-05",
        "image": {
          "@type": "ImageObject",
          "url": "https://everunityservices.com/images/og-image.jpg",
          "width": 1200,
          "height": 629
        },
        "publisher": {
          "@type": "Organization",
          "name": "Everunity Services",
          "logo": {
            "@type": "ImageObject",
            "url": "https://everunityservices.com/images/logo.png",
            "width": 1854,
            "height": 503
          }
        },
        "mainEntityOfPage": "https://everunityservices.com/about",
        "url": "https://everunityservices.com/about",
        "description": "Learn about Everunity Services, Nagpur’s trusted provider of solar panel installation, maintenance, and eco-friendly energy solutions."
      }
    `}
        </script>
      </Helmet>
      <AboutHero />
      <AboutOverview />
      <New />
      <OurMission />
      <SustainableEnergySection />
      <TeamSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
};

export default About;
