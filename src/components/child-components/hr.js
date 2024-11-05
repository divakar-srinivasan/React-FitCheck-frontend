import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const HeartRateCalculator = () => {
  const container = useRef(null);
  const [age, setAge] = useState("");
  const [restingHeartRate, setRestingHeartRate] = useState("");
  const [maximumHeartRate, setMaximumHeartRate] = useState("");
  const [heartRateRange, setHeartRateRange] = useState(null);

  useEffect(() => {
    gsap.from(container.current, {
      yPercent: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  const calculateHeartRateRange = () => {
    let calculatedMaxHR;
    if (age === "" || restingHeartRate === "" || maximumHeartRate === "") {
      alert("Please fill out all fields!");
      return;
    }

    const ageInYears = parseInt(age);
    const restingHRR = parseInt(restingHeartRate);
    const maxHRR = parseInt(maximumHeartRate);

    // Tanaka formula for maximum heart rate
    calculatedMaxHR = 208 - (0.7 * ageInYears);

    // Adjust maximum heart rate based on resting heart rate
    if (maxHRR > calculatedMaxHR) {
      calculatedMaxHR = maxHRR;
    }

    // Calculate heart rate range
    const minHeartRate = Math.max(60, restingHRR - 20); // Minimum heart rate is 60 BPM
    const maxHeartRate = Math.min(200, calculatedMaxHR); // Maximum heart rate is 200 BPM

    setHeartRateRange(`${minHeartRate}-${maxHeartRate}`);
  };

  return (
    <div className="bg-img">
      <div className="flex items-center justify-center mt-3">
        <div ref={container} className="signin-container">
          <h1  className="text-white font-bold text-3xl mb-4">Heart Rate Range Calculator</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              calculateHeartRateRange();
            }}
            className="space-y-4"
          >
            <input
              type="number"
              placeholder="Age (years)"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="input"
              required
            />
            <input
              type="number"
              placeholder="Resting Heart Rate (bpm)"
              value={restingHeartRate}
              onChange={(e) => setRestingHeartRate(e.target.value)}
              className="input"
              required
            />
            <input
              type="number"
              placeholder="Maximum Heart Rate (bpm)"
              value={maximumHeartRate}
              onChange={(e) => setMaximumHeartRate(e.target.value)}
              className="input"
              required
            />
            <button type="submit" className="btn">
              Calculate
            </button>
          </form>

          {heartRateRange && (
            <div className="result mt-6">
              <h2 className="text-2xl text-white font-semibold">Results:</h2>
              <p className="text-white">Your heart rate range is: {heartRateRange}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeartRateCalculator;
