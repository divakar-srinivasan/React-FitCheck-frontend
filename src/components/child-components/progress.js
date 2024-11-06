import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);  

const Progress = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [stepCount, setStepCount] = useState('');
  const [waterIntake, setWaterIntake] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');
  const [workoutType, setWorkoutType] = useState('');
  const [duration, setDuration] = useState('');
  const [distance, setDistance] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [sleepDuration, setSleepDuration] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [diaryNotes, setDiaryNotes] = useState('');

  const [tableData, setTableData] = useState([]);

  const onSave = () => {
    const data = {
      date: selectedDate,
      stepCount,
      waterIntake,
      caloriesBurned,
      workoutType,
      duration,
      distance,
      heartRate,
      sleepDuration,
      weight,
      reps,
      diaryNotes,
    };
    console.log('Saved Data:', data);
    alert('Your data has been saved!');
  };
    const chartData = {
      labels: ['Steps', 'Water Intake (liter)', 'Calories Burned', 'Duration (mins)', 'Distance (km)', 'Heart Rate (bpm)', 'Sleep (hrs)', 'Weight (kg)', 'Reps'],
      datasets: [
        {
          label: 'Today\'s Fitness Data',
          data: [
            stepCount || 0,
            waterIntake || 0,
            caloriesBurned || 0,
            duration || 0,
            distance || 0,
            heartRate || 0,
            sleepDuration || 0,
            weight || 0,
            reps || 0,
          ],
          backgroundColor: [
            '#4c6ef5',
            '#74c0fc',
            '#ff6b6b',
            '#f06595',
            '#cc5de8',
            '#845ef7',
            '#51cf66',
            '#fcc419',
            '#ff922b',
          ],
          borderColor: '#4c6ef5',
          borderWidth: 1,
        },
      ],
    };

  return (
    <div className="flex flex-row h-full bg-gray-100 p-6">
      {/* Main Section for Fitness Data (3/4 of the container) */}
      <div className="w-3/4 p-4 bg-white rounded-lg shadow-md mr-4">
        <h2 className="text-2xl font-bold mb-4">Today's Fitness Tracker</h2>
        <div className="mb-6">
          <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>
        
        {/* Fitness Data Categories */}
        <div className="grid grid-cols-2 gap-4">
          {/* Step Count */}
          <div className="p-4 bg-blue-100 rounded-lg">
            <h3 className="font-semibold">Step Count</h3>
            <input
              type="number"
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="0 steps"
              value={stepCount}
              onChange={(e) => setStepCount(e.target.value)}
            />
          </div>
          
          {/* Water Intake */}
          <div className="p-4 bg-green-100 rounded-lg">
            <h3 className="font-semibold">Water Intake</h3>
            <input
              type="number"
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="0 liter"
              value={waterIntake}
              onChange={(e) => setWaterIntake(e.target.value)}
            />
          </div>
          
          {/* Calories Burned */}
          <div className="p-4 bg-red-100 rounded-lg">
            <h3 className="font-semibold">Calories Burned</h3>
            <input
              type="number"
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="0 kcal"
              value={caloriesBurned}
              onChange={(e) => setCaloriesBurned(e.target.value)}
            />
          </div>
          
          {/* Workout Type */}
          <div className="p-4 bg-yellow-100 rounded-lg">
            <h3 className="font-semibold">Workout Type</h3>
            <input
              type="text"
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="Type of workout"
              value={workoutType}
              onChange={(e) => setWorkoutType(e.target.value)}
            />
          </div>
          
          {/* Duration */}
          <div className="p-4 bg-purple-100 rounded-lg">
            <h3 className="font-semibold">Duration</h3>
            <input
              type="number"
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="0 mins"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          
          {/* Distance */}
          <div className="p-4 bg-pink-100 rounded-lg">
            <h3 className="font-semibold">Distance</h3>
            <input
              type="number"
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="0 km"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
          
          {/* Heart Rate */}
          <div className="p-4 bg-indigo-100 rounded-lg">
            <h3 className="font-semibold">Heart Rate</h3>
            <input
              type="number"
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="0 bpm"
              value={heartRate}
              onChange={(e) => setHeartRate(e.target.value)}
            />
          </div>
          
          {/* Sleep Duration */}
          <div className="p-4 bg-teal-100 rounded-lg">
            <h3 className="font-semibold">Sleep Duration</h3>
            <input
              type="number"
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="0 hours"
              value={sleepDuration}
              onChange={(e) => setSleepDuration(e.target.value)}
            />
          </div>
          
          {/* Weight */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="font-semibold">Weight</h3>
            <input
              type="number"
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="0 kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          
          {/* Reps */}
          <div className="p-4 bg-orange-100 rounded-lg">
            <h3 className="font-semibold">Reps</h3>
            <input
              type="number"
              className="w-full mt-2 p-2 border rounded-md"
              placeholder="0 reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
          </div>
          
          {/* Diary Notes */}
          <div className="col-span-2 p-4 bg-white rounded-lg border">
            <h3 className="font-semibold">Diary Notes</h3>
            <textarea
              className="w-full h-24 p-2 mt-2 border rounded-md resize-none"
              placeholder="Write about today..."
              value={diaryNotes}
              onChange={(e) => setDiaryNotes(e.target.value)}
            ></textarea>
          </div>

        {/* Save Button */}
        <button
          onClick={onSave}
          className="mt-4 w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
        >
          Save
        </button>
        </div>
      </div>
      

      {/* Calendar Section (1/4 of the container) */}
      <div className="w-1/4 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Calendar</h2>
        <Calendar 
          onChange={setSelectedDate} 
          value={selectedDate} 
          className="w-full bg-gray-50 rounded-lg p-2"
        />
      </div> 
      
    </div>
    
  );
};

export default Progress;
