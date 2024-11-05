import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const BodyFatCalculator = () => {
  const container = useRef(null);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [neckCircumference, setNeckCircumference] = useState("");
  const [waistCircumference, setWaistCircumference] = useState("");
  const [hipCircumference, setHipCircumference] = useState("");
  const [gender, setGender] = useState("");
  const [bodyFat, setBodyFat] = useState(null);

  useEffect(() => {
    gsap.from(container.current, {
      yPercent: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  const calculateBodyFat = () => {
    let calculatedBodyFat;
    if (gender === "male") {
      // Formula for males
      calculatedBodyFat =
        86.01 * Math.log10(waistCircumference - neckCircumference) -
        70.041 * Math.log10(height) +
        36.76;
    } else {
      // Formula for females
      calculatedBodyFat =
        163.205 *
          Math.log10(
            waistCircumference + hipCircumference - neckCircumference
          ) -
        97.684 * Math.log10(height) -
        78.387;
    }
    setBodyFat(calculatedBodyFat);
  };

  return (
    <div className="bg-img pb-10">
      <div className="flex items-center justify-center my-4">
        <div ref={container} className="signin-container">
          <h1  className="text-white font-bold text-3xl mb-2">
            Body Fat Calculator
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              calculateBodyFat();
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
              placeholder="Neck Circumference (cm)"
              value={neckCircumference}
              onChange={(e) => setNeckCircumference(e.target.value)}
              className="input"
              required
            />
            <input
              type="number"
              placeholder="Waist Circumference (cm)"
              value={waistCircumference}
              onChange={(e) => setWaistCircumference(e.target.value)}
              className="input"
              required
            />
            {gender === "female" && ( 
              <input
                type="number"
                placeholder="Hip Circumference (cm)"
                value={hipCircumference}
                onChange={(e) => setHipCircumference(e.target.value)}
                className="input"
                required
              />
            )}
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="input"
              required
            ><option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button type="submit" className="btn">
            Calculate
            </button>
          </form>
          {bodyFat && (
            <div className="result mt-6">
              <h2 className="text-2xl text-white font-semibold">Results:</h2>
             <p className="text-white">Body Fat Percentage: {bodyFat.toFixed(2)}%</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyFatCalculator;
