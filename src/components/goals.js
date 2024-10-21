import React, { useState } from 'react';

const Goals = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    goal: '',
    baselineActivity: '',
    sex: '',
    dob: '',
    height: '',
    currentWeight: '',
    goalWeight: ''
  });

  const Goals = [
    "Lose Weight", "Maintain Weight", "Gain Weight", "Gain Muscle", "Modify my diet", "Manage stress", "Increase Step Count"
  ];

  const baseValues = [ "Not Very Active", "Lightly Active", "Active", "Very Active"];

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
    if (step === 2 && !formData.goal) {
      alert("Please select a goal.");
      return false;
    }
    if (step === 4 && !formData.baselineActivity) {
      alert("Please select your baseline activity level.");
      return false;
    }
    if (step === 6 && (!formData.sex || !formData.dob || !formData.height || !formData.currentWeight || !formData.goalWeight)) {
      alert("Please complete all the fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(6)) {
      // Handle the form submission logic (e.g., send to API)
      console.log("Form submitted successfully:", formData);
      alert("Form submitted successfully!");
      // Optionally reset the form or redirect the user
    }
  };

  return (
    <div className="w-full h-full p-20 flex flex-col justify-center items-center">
      {/* Step 1: Name Input */}
      {step === 1 && (
        <div className='shadow-lg shadow-gray-700 hover:shadow-xl hover:shadow-slate-700 w-1/2 h-auto p-10 flex flex-col items-center rounded-md'>
          <h1 className='text-xl font-bold '>What’s your first name?</h1>
          <h1 className='text-gray-500 font-light'>We’re happy you’re here.</h1>
          <h1 className='text-gray-500 font-light'>Let’s get to know a little about you.</h1>
          <input
            className='mt-8 border-2 border-solid border-gray-400 p-2 outline-none rounded-md w-96'
            type='text'
            placeholder='First Name'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            className='mb-20 mt-10 border-2 border-solid border-gray-400 p-2 outline-none rounded-md w-96'
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Step 2: Goal Selection */}
      {step === 2 && (
        <div className='shadow-lg shadow-gray-700 hover:shadow-xl hover:shadow-slate-700 w-1/2 h-auto p-10 flex flex-col items-center rounded-md'>
          <h1 className='text-xl font-bold '>Thanks! Now for your goals.</h1>
          <h1 className='text-gray-500 mb-10 font-light'>Select one goal that is important to you.</h1>
          <div className='flex flex-col space-y-5'>
            {Goals.map((goal, index) => (
              <button
                key={index}
                onClick={() => setFormData({ ...formData, goal })}
                className={`w-96 p-3 border rounded-md text-left ${
                  formData.goal === goal ? "bg-blue-100 border-blue-500" : "border-gray-300"
                }`}
              >
                {goal}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Static Motivation Message */}
      {step === 3 && (
        <div className='shadow-lg text-center p-10 shadow-gray-700 hover:shadow-xl hover:shadow-slate-700 w-1/2 h-auto flex flex-col items-center rounded-md'>
          <h1 className='text-xl font-bold'>Great! You’ve just taken a big step on your journey.</h1>
          <h1 className='text-gray-700 font-light my-4'>
            Did you know that tracking your food is a scientifically proven method to being successful?
          </h1>
          <h1 className='text-gray-700 font-light'>
            It’s called “self-monitoring,” and the more consistent you are, the more likely you are to hit your goals.
          </h1>
          <h1 className='text-gray-700 font-light my-4'>
            Now, let’s talk about your goal to {formData.goal}.
          </h1>
        </div>
      )}

      {/* Step 4: Baseline Activity Level */}
      {step === 4 && (
        <div className='shadow-lg shadow-gray-700 hover:shadow-xl hover:shadow-slate-700 w-1/2 h-auto p-10 flex flex-col items-center rounded-md'>
          <h1 className='text-xl font-bold '>What is your baseline activity level?</h1>
          <h1 className='text-gray-500 mb-10 font-light'>Select your baseline activity level.</h1>
          <div className='flex flex-col space-y-5'>
            {baseValues.map((value, index) => (
              <button
                key={index}
                onClick={() => setFormData({ ...formData, baselineActivity: value })}
                className={`w-96 p-3 border rounded-md text-left ${
                  formData.baselineActivity === value ? "bg-blue-100 border-blue-500" : "border-gray-300"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 5: Static Success Message */}
      {step === 5 && (
        <div className='shadow-lg text-center p-20 shadow-gray-700 hover:shadow-xl hover:shadow-slate-700 w-1/2 h-auto flex flex-col items-center rounded-md'>
          <h1 className='text-xl p-10 font-bold'>Super</h1>
          <h1 className='text-gray-700 p-10 font-light'>Let’s get into the specifics so we can build your personalized plan.</h1>
        </div>
      )}

      {/* Step 6: Personal Details */}
      {step === 6 && (
        <form className='shadow-lg shadow-gray-700 hover:shadow-xl hover:shadow-slate-700 w-1/2 h-auto p-10 flex flex-col rounded-md' onSubmit={handleSubmit}>
          <h1 className='text-xl font-bold mb-5'>Sex?</h1>
          <div className='space-x-10'>
            <input
              type='radio'
              name='sex'
              value="male"
              checked={formData.sex === 'male'}
              onChange={handleChange}
            /> Male
            <input
              type='radio'
              name='sex'
              value="female"
              checked={formData.sex === 'female'}
              onChange={handleChange}
            /> Female
          </div>
          
          <div>
            <h1 className='text-xl my-7 font-bold mb-5'>Date of Birth?</h1>
            <input
              className='border-2 border-solid border-gray-400 p-2 outline-none rounded-md w-96'
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div>
            <h1 className='text-xl my-7 font-bold mb-5'>Height?</h1>
            <input
              className='border-2 border-solid border-gray-400 p-2 outline-none rounded-md w-72'
              type="number"
              placeholder='Height in cm'
              name="height"
              value={formData.height}
              onChange={handleChange}
            />
          </div>

          <div>
            <h1 className='text-xl my-5 font-bold mb-5'>Current Weight?</h1>
            <input
              className='border-2 border-solid border-gray-400 p-2 outline-none rounded-md w-72'
              type="number"
              placeholder='Current weight in lbs'
              name="currentWeight"
              value={formData.currentWeight}
              onChange={handleChange}
            />
          </div>

          <div>
            <h1 className='text-xl my-5 font-bold mb-5'>Goal Weight?</h1>
            <input
              className='border-2 border-solid border-gray-400 p-2 outline-none rounded-md w-72'
              type="number"
              placeholder='Goal weight in lbs'
              name="goalWeight"
              value={formData.goalWeight}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-5 px-6 py-2 bg-green-500 text-white rounded-lg"
          >
            Submit
          </button>
        </form>
      )}

      {/* Navigation Buttons */}
      <div className="flex mt-10">
        <button
          disabled={step === 1}
          onClick={handleBack}
          className={`mr-4 px-6 py-2 bg-gray-200 text-gray-700 rounded-lg ${
            step === 1 && "cursor-not-allowed"
          }`}
        >
          Back
        </button>
        {step < 6 && (
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Goals;
