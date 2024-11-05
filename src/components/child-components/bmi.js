import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const BmiCalculator = () => {
  const container = useRef(null);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
 
  useEffect(() => {
    gsap.from(container.current, {
      yPercent: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  const calculateBMI = () => {
    // Convert height from cm to meters
    const heightInMeters = height / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBMI); // Determine BMI category

    if (calculatedBMI < 18.5) {
      setCategory("Underweight");
    } else if (calculatedBMI < 24.9) {
      setCategory("Normal weight");
    } else if (calculatedBMI < 29.9) {
      setCategory("Overweight");
    } else {
      setCategory("Obesity");
    }
  };

  return (
    <div className="bg-img">
      <div className="flex items-center justify-center mt-3">
        <div ref={container} className="signin-container">
          <h1  className="text-white font-bold text-3xl mb-4">
            BMI Calculator
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              calculateBMI();
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
            <button type="submit" className="btn">
              Calculate
            </button>
          </form>
          {bmi && (
            <div className="result mt-6">
              <h2 className="text-2xl font-semibold text-white">Results:</h2>
              <p className="text-white">BMI: {bmi.toFixed(2)}</p>
              <p className="text-white">Category: {category}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
