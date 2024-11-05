import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Goals = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    goals: "",
    baselineActivity: "",
    sex: "",
    dob: "",
    height: "",
    currentWeight: "",
    goalWeight: "",
  });

  const Goals = [
    "Lose Weight",
    "Maintain Weight",
    "Gain Weight",
    "Gain Muscle",
    "Modify my diet",
    "Manage stress",
    "Increase Step Count",
  ];

  const baseValues = [
    "Not Very Active",
    "Lightly Active",
    "Active",
    "Very Active",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const validateStep = (step) => {
    if (step === 1 && (!formData.firstName || !formData.lastName)) {
      alert("Please fill in your first and last name.");
      return false;
    }
    if (step === 2 && !formData.goals) {
      alert("Please select a goal.");
      return false;
    }
    if (step === 4 && !formData.baselineActivity) {
      alert("Please select your baseline activity level.");
      return false;
    }
    if (
      step === 6 &&
      (!formData.sex ||
        !formData.dob ||
        !formData.height ||
        !formData.currentWeight ||
        !formData.goalWeight)
    ) {
      alert("Please complete all the fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateStep(6)) {
        
      try {
        const response = await axios.post("http://localhost:5000/api/users/goals", formData, {
          headers: {
            "Content-Type": "application/json", 
          },
        });
        console.log("Info created successfully!",formData);
        console.log(response.data);
        navigate('/home');
      } catch (error) {
        console.log("Failed to create event");
        console.error(error);
      }

  }
  };

  return (
    <div className="bg-goals w-full h-auto p-20 flex flex-col justify-center items-center">
      {step === 1 && (
        <div className="signin-container space-y-4 shadow-lg shadow-gray-700 hover:shadow-xl hover:shadow-slate-700  flex flex-col items-center rounded-md">
          <h1 className="text-xl font-bold text-white">What’s your first name?</h1>
          <h1 className="text-gray-100 font-light">We’re happy you’re here.</h1>
          <h1 className="text-gray-100 font-light">
            Let’s get to know a little about you.
          </h1>
          <input
            className="input mt-5"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
          className="input"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      )}

      {step === 2 && (
        <div className="shadow-lg signin-container  shadow-gray-700 hover:shadow-xl hover:shadow-slate-700 flex flex-col items-center ">
          <h1 className="text-xl font-bold text-white">Thanks! Now for your goals.</h1>
          <h1 className="text-gray-100 mb-10 font-light">
            Select one goal that is important to you.
          </h1>
          <div className="flex flex-col space-y-5">
            {Goals.map((goals, index) => (
              <button
                key={index}
                onClick={() => setFormData({ ...formData, goals })}
                className={`input ${
                  formData.goals === goals
                }`}
              >
                {goals}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="shadow-lg  signin-container text-center p-10 shadow-gray-700 hover:shadow-xl hover:shadow-slate-700  flex flex-col items-center rounded-md">
          <h1 className="text-2xl text-white font-bold font-libre">
            Great! You’ve just taken a big step on your journey.
          </h1>
          <h1 className="text-gray-100  my-4">
            Did you know that tracking your food is a scientifically proven
            method to being successful?
          </h1>
          <h1 className="  text-orange-100">
            It’s called “self-monitoring,” and the more consistent you are, the
            more likely you are to hit your goals.
          </h1>
          <h1 className="font-bold text-yellow-300 my-4">
            Now, let’s talk about your goal to {formData.goal}.
          </h1>
        </div>
      )}

      {step === 4 && (
        <div className="shadow-lg signin-container text-center  shadow-gray-700 hover:shadow-xl hover:shadow-slate-700  flex flex-col items-center  ">
          <h1 className="text-2xl text-white font-bold">
            What is your baseline activity level?
          </h1>
          <h1 className="text-gray-100 mb-10 font-light">
            Select your baseline activity level.
          </h1>
          <div className="flex flex-col space-y-5">
            {baseValues.map((value, index) => (
              <button
                key={index}
                onClick={() =>
                  setFormData({ ...formData, baselineActivity: value })
                }
                className={`input ${
                  formData.baselineActivity === value
                    ? "bg-blue-100 border-blue-500"
                    : "border-gray-300"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="shadow-lg signin-container text-center p-20 shadow-gray-700 hover:shadow-xl hover:shadow-slate-700  flex flex-col items-center">
          <h1 className="text-5xl text-green-500 p-10  font-bold">Super!</h1>
          <h1 className="text-white p-10 t">
            Let’s get into the specifics so we can build your personalized plan.
          </h1>
        </div>
      )}

      {step === 6 && (
        <form
          className="shadow-lg m-5 signin-container shadow-gray-700 hover:shadow-xl hover:shadow-slate-700  flex flex-col "
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl text-white font-bold mb-5">Sex?</h1>
          <div className="space-x-10">
            <label className="text-white hover:scale-105">
              <input
                type="radio"
                name="sex"
                value="male"
                checked={formData.sex === "male"}
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label className="text-white ">
              <input
                type="radio"
                name="sex"
                value="female"
                checked={formData.sex === "female"}
                onChange={handleChange}
              />{" "}
              Female
            </label>
          </div>

          <div>
            <h1 className="text-xl text-white my-7 font-bold mb-5">Date of Birth?</h1>
            <input
              className="input"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div>
            <h1 className="text-xl text-white my-7 font-bold mb-5">Height?</h1>
            <input
              className="input"
              type="number"
              placeholder="Height in cm"
              name="height"
              value={formData.height}
              onChange={handleChange}
            />
          </div>

          <div>
            <h1 className="text-xl text-white my-5 font-bold mb-5">Current Weight?</h1>
            <input
              className="input"
              type="number"
              placeholder="Current weight in lbs"
              name="currentWeight"
              value={formData.currentWeight}
              onChange={handleChange}
            />
          </div>

          <div>
            <h1 className="text-xl my-5 text-white font-bold mb-5">Goal Weight?</h1>
            <input
              className="input"
              type="number"
              placeholder="Goal weight in lbs"
              name="goalWeight"
              value={formData.goalWeight}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="mt-5 px-6 py-2 bg-green-500 text-white rounded-lg"
          >
            Submit
          </button>
        </form>
      )}

      <div className="flex my-10 space-x-20">
        <button
          disabled={step === 1}
          onClick={handleBack}
          className={`btn ${
            step === 1 && "cursor-not-allowed"
          }`}
        >
          Back
        </button>
        {step < 6 && (
          <button
            onClick={handleNext}
            className="btnx bg-blue-500 hover:bg-blue-600"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Goals;
