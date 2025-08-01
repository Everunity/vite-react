import React from "react";
import Hero from "./Hero";
import SecondSection from "./SecondSection";
import ReasonsSection from "./ReasonsSection";
import FixedBackgroundSection from "./FixedBackgroundSection";
import ProjectsShowcase from "../Projects/ProjectsShowcase";
import TeamSection from "../TeamSection/TeamSection";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import BlogSection from "../Blog/BlogSection";
import Helmet from "react-helmet";
import AboutCompany from "./AboutCompany";
const Home = () => {
  return (
    <>
      {/* compnents */}
      <Helmet>
        <title>
          Solar Panel Installation & Maintenance in Nagpur | Everunity Services
        </title>
        <meta
          name="description"
          content="Everunity Services provides expert solar panel installation, cleaning, and maintenance in Nagpur. Get affordable, eco-friendly energy solutions for your home or business."
        />
        <link rel="canonical" href="https://everunityservices.com/" />

        {/* Open Graph (OG) tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Solar Panel Installation & Maintenance in Nagpur | Everunity Services"
        />
        <meta
          property="og:description"
          content="Everunity Services provides expert solar panel installation, cleaning, and maintenance in Nagpur. Get affordable, eco-friendly energy solutions for your home or business."
        />
        <meta property="og:url" content="https://everunityservices.com/" />
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
          content="Solar Panel Installation & Maintenance in Nagpur | Everunity Services"
        />
        <meta
          name="twitter:description"
          content="Everunity Services provides expert solar panel installation, cleaning, and maintenance in Nagpur. Get affordable, eco-friendly energy solutions for your home or business."
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
            "headline": "Solar Panel Installation & Maintenance in Nagpur | Everunity Services",
            "author": {
              "@type": "Person",
              "name": "Everunity Services",
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
            "mainEntityOfPage": "https://everunityservices.com/",
            "url": "https://everunityservices.com/",
            "description": "Everunity Services provides expert solar panel installation, cleaning, and maintenance in Nagpur. Get affordable, eco-friendly energy solutions for your home or business."
          }
        `}
        </script>
      </Helmet>
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
