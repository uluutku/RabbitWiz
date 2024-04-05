import React from "react";
import "./LandingPage.css";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import LinkContainer from "../Components/LinkContainer";
import Footer from "../Components/Footer";

function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <LinkContainer />
      <Footer />
    </div>
  );
}

export default LandingPage;
