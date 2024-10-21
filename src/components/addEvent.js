import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { gsap } from "gsap";
import axios from "axios";

const AddEvent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [rollno, setRollno] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [venue, setVenue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [formLink, setFormLink] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");
  const [message, setMessage] = useState("");

  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();
  const inputRefs = useRef([]);
  const buttonRefs = useRef(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setSelectedFile(file);

      // Create a preview of the image
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

  // Handle file upload
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", selectedFile); // Append the image to FormData
    formData.append("eventName", eventName);
    formData.append("description", description);
    formData.append("rollno", rollno);
    formData.append("name", name);
    formData.append("department", department);
    formData.append("venue", venue);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    formData.append("startTime", startTime);
    formData.append("endTime", endTime);
    formData.append("formLink", formLink);
    formData.append("whatsappLink", whatsappLink);

    try {
      const response = await axios.post("http://localhost:5000/api/users/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Event created successfully!");
      console.log(response.data);
    } catch (error) {
      setMessage("Failed to create event");
      console.error(error);
    }
  };

  const departments = [
    "Computer Engineering",
    "Information Technology",
    "Electrical and Communication Engineering",
    "Electrical and Electronics Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Food Technology",
    "Artificial Intelligence and Data Science",
    "Artificial Intelligence and Machine Learning",
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
            placeholder="Event Name"
            name="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="form-input"
            ref={(el) => inputRefs.current.push(el)}
          />

          <textarea
            name="description"
            placeholder="Event Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="form-input"
            ref={(el) => inputRefs.current.push(el)}
          />

          <div className="flex space-x-10">
            <input
              type="text"
              placeholder="Roll Number"
              name="rollno"
              value={rollno}
              onChange={(e) => setRollno(e.target.value)}
              className="form-input"
              ref={(el) => inputRefs.current.push(el)}
            />
            <input
              type="text"
              placeholder="Student Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              ref={(el) => inputRefs.current.push(el)}
            />
          </div>

          <select
            name="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="form-input"
            ref={(el) => inputRefs.current.push(el)}
          >
            <option value="" disabled>
              Select a department
            </option>
            {departments.map((dept, index) => (
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

            <div>
              <label className="block text-white mb-2">End Date</label>
              <input
                type="date"
                name="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
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
            placeholder="Google Form Link"
            name="formLink"
            value={formLink}
            onChange={(e) => setFormLink(e.target.value)}
            className="form-input"
            ref={(el) => inputRefs.current.push(el)}
          />

          <input
            type="text"
            placeholder="WhatsApp Group Link"
            name="whatsappLink"
            value={whatsappLink}
            onChange={(e) => setWhatsappLink(e.target.value)}
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
              Create Event
            </button>
            {message && <p className="text-white">{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
