import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaRedo, FaFlag } from "react-icons/fa"; // Import icons
import useSound from "use-sound";
import beep from "../../sounds/sword.mp3"; // sound file
import gsap from "gsap";

const AdvancedStopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const containerRef = useRef(null);
  const timerRef = useRef(null);
  const [playSound] = useSound(beep);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => setTime((prev) => prev + 10), 10);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
    playSound(); // Play sound on start/pause
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    playSound();
  };

  const handleLap = () => {
    if (isRunning) {
      setLaps((prevLaps) => [...prevLaps, time]);
      playSound();
    }
  };

  const formatTime = (time) => {
    const milliseconds = `00${time % 1000}`.slice(-3);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div ref={containerRef} className="bg-timer flex flex-col items-center p-4">
      <div className="text-5xl text-custom-red mt-40 font-mono mb-4">
        {formatTime(time)}
      </div>
      
      <div className="flex space-x-10 my-6">
        <button onClick={handleStartPause} >
          {isRunning ? <FaPause  className=" w-8 text-custom-red h-8"/> : <FaPlay className="text-white w-8 h-8 hover:text-green-500" />}
        </button>
        <button onClick={handleReset} >
          <FaRedo className="text-white w-8 h-8 hover:text-blue-500"/>
        </button>
        <button onClick={handleLap} >
          <FaFlag className="text-white w-8 h-8 hover:text-blue-500"/>
        </button>
      </div>

      {laps.length > 0 && (
        <div className="text-white text-lg mt-4 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-2">Laps:</h2>
          <ul>
            {laps.map((lap, index) => (
              <li key={index}>
                Lap {index + 1}: {formatTime(lap)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdvancedStopwatch;
