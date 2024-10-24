import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import Signup from "./components/signup";
import Signin from "./components/login";
import About from "./components/child-components/about";
import Home from "./components/home";
import Contact from "./components/child-components/contact";
import Workshops from "./components/child-components/workshops";
import AddEvent from "./components/child-components/addEvent";
import Footer from "./components/footer";
import Goals from "./components/goals";
import Nav from "./components/Nav";
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
        <Route path="/goals" element={<Goals />} />
        <Route path="/home" element={<Nav />}>
          <Route index element={<Home />} />
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
