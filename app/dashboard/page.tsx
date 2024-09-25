"use client";

import React from "react";

import Navbar from "../Components/Navbar";
import Counter from "../Components/Counter";
import Pricing from "../Components/Pricing";
import Services from "../Components/Services";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Footer from "../Components/Footer";
import FrequentlyAskQuestions from "../Components/FrequentlyAskQuestions";

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <section className="relative flex flex-col h-full gap-10">
        <Hero />
        <About />
        <Services />
        <Pricing />

        {/* <div className="flex flex-col items-center justify-center p-10">
          <Counter />
        </div> */}

        <FrequentlyAskQuestions />
        <Footer />
      </section>
    </div>
  );
};

export default Dashboard;

export const CARD_LIST = [
  {
    imgUrl: "https://unsplash.com/photos/a-close-up-of-a-power-line-Eptb4xF9xbU",
  },
];
