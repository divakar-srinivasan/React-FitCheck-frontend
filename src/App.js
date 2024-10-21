import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Events from "./components/events";
import Workshops from "./components/workshops";
import AddEvent from "./components/addEvent";
import Footer from "./components/footer";
import Goals from "./components/goals";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Goals" element={<Home />}>
          <Route index element={<Goals />} />
          <Route path="addEvents" element={<AddEvent />} />
          <Route path="workshops" element={<Workshops />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
