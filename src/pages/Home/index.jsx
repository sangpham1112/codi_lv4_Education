import React from "react";
import Services from "./components/Services";
import About from "./components/About";
import Instructors from "./components/Instructors";
import Courses from "./components/Courses";
import Slider from "./components/Slider";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <>
      <Slider />
      <Services />
      <About />
      <Instructors />
      <Courses />
      <Testimonials />
    </>
  );
};

export default Home;
