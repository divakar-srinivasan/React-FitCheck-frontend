import React, { useEffect, useRef, useState } from "react";
import useSound from 'use-sound';
import boop from '../../sounds/sword.mp3';
import gsap from "gsap";

const BmrCalculator = () => {
  const container = useRef(null);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [bmr, setBmr] = useState(null);
  const [tdee, setTdee] = useState(null);
  const [Sound] = useSound(boop);
  const sword_sound = useRef(null);

  useEffect(() => {
    const t2 = gsap.timeline();
    
    t2.from(sword_sound.current, {
      duration: 1,
      ease: 'power2.out',
      onStart: () => {
        Sound(); 
      },
    });
  }, [Sound]);
  
  useEffect(() => {
    gsap.from(container.current, {
      yPercent: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  
  const calculateBMR = () => {
    let calculatedBMR;
    if (gender === "male") {
      calculatedBMR = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
      calculatedBMR = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }
    setBmr(calculatedBMR);
    
    let activityMultiplier = 1.2; // Sedentary default
    if (activityLevel === "light") activityMultiplier = 1.375;
    if (activityLevel === "moderate") activityMultiplier = 1.55;
    if (activityLevel === "active") activityMultiplier = 1.725;
    if (activityLevel === "very_active") activityMultiplier = 1.9;
    
    const calculatedTDEE = calculatedBMR * activityMultiplier;
    setTdee(calculatedTDEE);
  };

  return (
    <div className="bg-img">
    <div className="flex items-center justify-center mt-3">
    <div ref={container} className="signin-container">
    <h1 ref={sword_sound} className="text-white font-bold text-3xl mb-4">BMR Calculator</h1>
    <form
          onSubmit={(e) => {
            e.preventDefault();
            calculateBMR();
          }}
          className="space-y-4"
        >
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="input"
            required
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="input"
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input"
            required
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="input"
            required
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="input"
            required
          >
            <option value="">Activity Level</option>
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="light">Light (light exercise/sports 1-3 days/week)</option>
            <option value="moderate">Moderate (moderate exercise/sports 3-5 days/week)</option>
            <option value="active">Active (hard exercise/sports 6-7 days a week)</option>
            <option value="very_active">Very Active (very hard exercise/sports & physical job)</option>
          </select>
          <button type="submit" className="btn">
            Calculate
          </button>
        </form>

        {bmr && (
          <div className="result mt-6">
            <h2 className="text-2xl font-semibold">Results:</h2>
            <p>BMR: {bmr.toFixed(2)} kcal/day</p>
            <p>TDEE: {tdee.toFixed(2)} kcal/day</p>
            <p className="mt-4">To maintain your weight: {tdee.toFixed(2)} kcal/day</p>
            <p>To lose weight (deficit of 500 kcal/day): {(tdee - 500).toFixed(2)} kcal/day</p>
            <p>To gain weight (surplus of 500 kcal/day): {(tdee + 500).toFixed(2)} kcal/day</p>
          </div>
        )}
    </div>
    </div>
    

      </div>
  );
};

export default BmrCalculator;

