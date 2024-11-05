import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineLike, AiFillLike } from "react-icons/ai"; // Import both icons

const PostDisplay = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  const [comments, setComments] = useState({});
  const [likes, setLikes] = useState({});
  const [likedEvents, setLikedEvents] = useState({}); // Track liked events

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/get");
        const eventDataWithImages = response.data.map((event) => {
          const base64Image = btoa(
            new Uint8Array(event.image.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          return { ...event, base64Image };
        });
        setEvents(eventDataWithImages);

        // Initialize like and comment counts
        const initialLikes = {};
        const initialComments = {};
        const initialLikedEvents = {};
        eventDataWithImages.forEach(event => {
          initialLikes[event._id] = event.likes || 0;
          initialComments[event._id] = [];
          initialLikedEvents[event._id] = false; // Initialize liked state
        });
        setLikes(initialLikes);
        setComments(initialComments);
        setLikedEvents(initialLikedEvents);
      } catch (error) {
        setError("Error fetching the event details");
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  const handleLike = (eventId) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [eventId]: prevLikes[eventId] + (likedEvents[eventId] ? -1 : 1), // Increment or decrement based on the current liked state
    }));
    setLikedEvents(prevLiked => ({
      ...prevLiked,
      [eventId]: !prevLiked[eventId], // Toggle liked state
    }));
  };

  const handleComment = (eventId, comment) => {
    setComments(prevComments => ({
      ...prevComments,
      [eventId]: [...prevComments[eventId], comment],
    }));
  };

  return (
    <div className="flex flex-col mt-5 px-5">
      <h1 className="text-white text-3xl p-6">All Workouts</h1>
      {error && <p className="text-custom-red">{error}</p>}

      <div className="w-full px-5 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {events.length > 0 ? (
          events.map((eventData) => (
            <div
              key={eventData._id}
              className="card hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`data:image/jpeg;base64,${eventData.base64Image}`}
                alt={eventData.workoutName}
              />
              <h3 className="text-white text-center text-2xl font-bebas py-3">
                {eventData.workoutName}
              </h3>
              <div className="pt-3 overflow-hidden transition-all duration-300 hover:h-48 h-36 hover:overflow-scroll">
                <p className="text-white">
                  <strong>Description :</strong> {eventData.description}
                </p>
                <p className="text-white">
                  <strong>Date :</strong>{" "}
                  {new Date(eventData.startDate).toLocaleDateString()}
                </p>
                <p className="text-white">
                  <strong>Time :</strong> {eventData.startTime} - {eventData.endTime}
                </p>
                <p className="text-white">
                  <strong>Venue :</strong> {eventData.venue}
                </p>
                <p className="text-white">
                  <strong>Tool :</strong> {eventData.tool}
                </p>
                <p className="text-white">
                  <strong>BMR :</strong> {eventData.bmr}
                </p>
                <p className="text-white">
                  <strong>Diet :</strong> {eventData.diet}
                </p>
              </div>

              {/* Like and Comment Section */}
              <div className="mt-4 flex justify-around items-center text-white">
                <button
                  onClick={() => handleLike(eventData._id)}
                  className="like-button"
                >
                  {likedEvents[eventData._id] ? (
                    <AiFillLike className="text-red-500 h-8 w-8" />
                  ) : (
                    <AiOutlineLike className="text-gray-400 h-6 w-6" />
                  )}
                  <span className="ml-2">{likes[eventData._id]}</span>
                </button>
                <button
                  onClick={() => {
                    const comment = prompt("Enter your comment:");
                    if (comment) handleComment(eventData._id, comment);
                  }}
                  className="comment-button text-custom-blue"
                >
                  💬 Comment
                </button>
              </div>

              {/* Display Comments */}
              <div className="mt-2 text-white">
                <strong>Comments:</strong>
                <ul>
                  {comments[eventData._id] && comments[eventData._id].map((comment, index) => (
                    <li key={index} className="text-sm py-1">
                      {comment}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white justify-center items-center">
            Loading workout details...
          </p>
        )}
      </div>
    </div>
  );
};

export default PostDisplay;
