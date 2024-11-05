import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const OneRepMaxCalculator = () => {
  const container = useRef(null);
  const [workoutType, setWorkoutType] = useState("");
  const [repsCompleted, setRepsCompleted] = useState("");
  const [weightUsed, setWeightUsed] = useState("");
  const [oneRepMax, setOneRepMax] = useState(null);

  useEffect(() => {
    gsap.from(container.current, {
      yPercent: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  const calculateOneRepMax = () => {
    let reps = parseInt(repsCompleted);
    let weight = parseFloat(weightUsed);
    if (isNaN(reps) || reps <= 0 || (weightUsed && (isNaN(weight) || weight <= 0))) {
      alert("Please enter valid numbers for reps and weight.");
      return;
    }

    let oneRepMaxValue;
    switch (workoutType.toLowerCase()) {
      case "squat":
        oneRepMaxValue = calculate1RM(weight, reps, 1.0278, 30);
        break;
      case "deadlift":
        oneRepMaxValue = calculate1RM(weight, reps, 1.0125, 28.25);
        break;
      case "bench press":
        oneRepMaxValue = calculate1RM(weight, reps, 1.0337, 30);
        break;
      case "overhead press":
        oneRepMaxValue = calculate1RM(weight, reps, 1.0298, 27.5);
        break;
      case "pull-up":
        oneRepMaxValue = reps * 0.033 * 31.25;
        break;
      default:
        alert("Please select a valid workout type.");
        return;
    }

    setOneRepMax(oneRepMaxValue ? Math.round(oneRepMaxValue) : null);
  };

  const calculate1RM = (weight, reps, multiplier, divisor) => {
    return weight * multiplier * (reps / divisor);
  };

  return (
    <div className="bg-img">
      <div className="flex items-center justify-center mt-3">
        <div ref={container} className="signin-container">
          <h1 className="text-white font-bold text-3xl mb-4">1RM Calculator</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              calculateOneRepMax();
            }}
            className="space-y-4"
          >
            <select
              name="workoutType"
              value={workoutType}
              onChange={(e) => setWorkoutType(e.target.value)}
              className="input w-full"
              required
            >
              <option value="">Select Workout Type</option>
              <option value="Squat">Squat</option>
              <option value="Deadlift">Deadlift</option>
              <option value="Bench Press">Bench Press</option>
              <option value="Overhead Press">Overhead Press</option>
              <option value="Pull-Up">Pull-Up</option>
            </select>
            <input
              type="number"
              placeholder="Reps completed"
              value={repsCompleted}
              onChange={(e) => setRepsCompleted(e.target.value)}
              className="input w-full"
              required
            />
            {workoutType.toLowerCase() !== "pull-up" && (
              <input
                type="number"
                placeholder="Weight used (kg)"
                value={weightUsed}
                onChange={(e) => setWeightUsed(e.target.value)}
                className="input w-full"
                required={workoutType.toLowerCase() !== "pull-up"}
              />
            )}
            <button type="submit" className="btn">
              Calculate 1RM
            </button>
          </form>
          {oneRepMax !== null && (
            <div className="result mt-6">
              <h2 className="text-2xl font-semibold text-white">Results:</h2>
              <p className="text-white">Your estimated 1RM: {oneRepMax} kg</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OneRepMaxCalculator;
