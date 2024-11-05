import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import Signup from "./components/signup";
import Signin from "./components/login";
import About from "./components/child-components/about";
import Home from "./components/home";
import Contact from "./components/child-components/contact";
import AddEvent from "./components/child-components/addPost";
import Bmr from "./components/child-components/bmr";
import Footer from "./components/footer";
import Goals from "./components/goals";
import Nav from "./components/Nav";
import Health from "./components/child-components/health";
import Calorie from "./components/Api-components/calorie";
import Cocktail from "./components/Api-components/cocktail";
import Exercise from "./components/Api-components/ex";
import Nutrition from "./components/Api-components/nutrition";
import Recipe from "./components/Api-components/recipe";
import Calculator from "./components/child-components/calculator";
import Bmi from "./components/child-components/bmi"
import Bf from "./components/child-components/bf"
import Hr from "./components/child-components/hr"
import Cart from "./components/child-components/cart"
import AOS from "aos";
import Rm from "./components/child-components/rm"
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
          <Route path="calculator" element={<Calculator />} >
             <Route index element={<Bmr />} />
             <Route path="bmi" element={<Bmi />} />
             <Route path="bf" element={<Bf />} />
             <Route path="hr" element={<Hr />} />
             <Route path="rm" element={<Rm />} />
          </Route>
          <Route path="health" element={<Health />}>
            <Route path="calorie" element={<Calorie />} />
            <Route path="cocktail" element={<Cocktail />} />
            <Route path="exercise" element={<Exercise />} />
            <Route path="nutrition" element={<Nutrition />} />
            <Route path="recipe" element={<Recipe />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
