import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { gsap } from "gsap";
import axios from "axios";

const AddPost = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [workoutName, setworkoutName] = useState("");
  const [description, setDescription] = useState("");
  const [tool, settool] = useState("");
  const [venue, setVenue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [bmr, setbmr] = useState("");
  const [diet, setdiet] = useState("");
  const [message, setMessage] = useState("");

  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();
  const inputRefs = useRef([]);
  const buttonRefs = useRef(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/*",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", selectedFile); 
    formData.append("workoutName", workoutName);
    formData.append("description", description);
    formData.append("tool", tool);
    formData.append("venue", venue);
    formData.append("startDate", startDate);
    formData.append("startTime", startTime);
    formData.append("endTime", endTime);
    formData.append("bmr", bmr);
    formData.append("diet", diet);

    try {
      const response = await axios.post("http://localhost:5000/api/users/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Posted successfully!");
      console.log(response.data);
    } catch (error) {
      setMessage("Failed to post");
      console.error(error);
    }
  };

  const gymTools = [
    "Treadmill",
    "Elliptical Machine",
    "Stationary Bike",
    "Rowing Machine",
    "Dumbbells",
    "Barbells",
    "Kettlebells",
    "Resistance Bands",
    "Medicine Ball",
    "Yoga Mat",
    "Pull-Up Bar",
    "Smith Machine",
    "Leg Press Machine",
    "Chest Press Machine",
    "Cable Machine",
];


  useEffect(() => {
    gsap.from(inputRefs.current, {
      x: -500,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1,
    });
    gsap.from(buttonRefs.current, {
      x: -500,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="bg-add-event w-full h-full flex justify-center items-center">
      <div className="md:w-1/2 bg-custom-black w-full h-auto flex flex-col p-10 md:px-20 rounded-xl my-20">
        <h1 className="text-color font-bold text-3xl mb-10">Add Event</h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div
            {...getRootProps({
              className:
                "dropzone border-dashed border-2 border-gray-400 p-4 text-center cursor-pointer",
            })}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the image here ...</p>
            ) : (
              <p>Drag 'n' drop an image here, or click to select one</p>
            )}
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Event Preview"
                className="mt-4 w-full h-auto object-cover"
              />
            )}
          </div>
          {selectedFile && <p>Selected file: {selectedFile.name}</p>}

          <input
            type="text"
            placeholder="Workout Name"
            name="workoutName"
            value={workoutName}
            onChange={(e) => setworkoutName(e.target.value)}
            className="form-input"
            ref={(el) => inputRefs.current.push(el)}
          />

          <textarea
            name="description"
            placeholder="workout Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="form-input"
            ref={(el) => inputRefs.current.push(el)}
          />

          <select
            name="tool"
            value={tool}
            onChange={(e) => settool(e.target.value)}
            className="form-input"
            ref={(el) => inputRefs.current.push(el)}
          >
            <option value="" disabled>
              Select a Tool used
            </option>
            {gymTools.map((dept, index) => (
              <option key={index} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="venue"
            placeholder="Venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            className="form-input"
            ref={(el) => inputRefs.current.push(el)}
          />

          <div className="flex space-x-4">
            <div>
              <label className="block text-white mb-2">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="form-input"
                ref={(el) => inputRefs.current.push(el)}
              />
            </div>


          </div>

          <div className="flex space-x-4">
            <div>
              <label className="block text-white mb-2">Start Time</label>
              <input
                type="time"
                name="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="form-input"
                ref={(el) => inputRefs.current.push(el)}
              />
            </div>

            <div>
              <label className="block text-white mb-2">End Time</label>
              <input
                type="time"
                name="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="form-input"
                ref={(el) => inputRefs.current.push(el)}
              />
            </div>
          </div>

          <input
            type="text"
            placeholder="Enter Basal Metabolic Rate"
            name="bmr"
            value={bmr}
            onChange={(e) => setbmr(e.target.value)}
            className="form-input"
            ref={(el) => inputRefs.current.push(el)}
          />

          <input
            type="text"
            placeholder="Dietary Intake"
            name="diet"
            value={diet}
            onChange={(e) => setdiet(e.target.value)}
            className="form-input"
            ref={(el) => inputRefs.current.push(el)}
          />

          <div className="flex justify-center space-x-10">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn"
              ref={buttonRefs}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="text-white bg-green-600 h-12 w-32 rounded-md font-bold hover:bg-green-700 hover:scale-105"
              ref={buttonRefs}
            >
              Post
            </button>
            {message && <p className="text-white">{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
