import React, { useEffect, useState } from "react";
import axios from "axios";

const EventDisplay = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");

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
      } catch (error) {
        setError("Error fetching the event details");
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col mt-5 px-5">
      <h1 className="text-white text-3xl p-6">All Events</h1>
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
                alt={eventData.eventName}
              />
              <h3 className="text-white text-center text-2xl font-bebas py-3">
                {eventData.eventName}
              </h3>
              <div className="pt-3 overflow-hidden transition-all duration-300 hover:h-44 h-32 hover:overflow-scroll">
                <p className="text-white">
                  <strong>Date : </strong>{" "}
                  {new Date(eventData.startDate).toLocaleDateString()} -{" "}
                  {new Date(eventData.endDate).toLocaleDateString()}
                </p>
                <p className="text-white">
                  <strong>Time : </strong> {eventData.startTime} -{" "}
                  {eventData.endTime}
                </p>
                <p className="text-white">
                  <strong>Venue :</strong> {eventData.venue}
                </p>
                <p className="text-white">
                  <strong>Organizer :</strong> {eventData.name} (
                  {eventData.rollno})
                </p>
                <p className="text-white">
                  <strong>Department :</strong> {eventData.department}
                </p>
                <p className="text-white">
                  <strong>Description :</strong> {eventData.description}
                </p>
              </div>
              <div className="flex justify-around pt-4">
                {eventData.formLink && (
                  <button
                    className="btn"
                    onClick={() => (window.location.href = eventData.formLink)}
                  >
                    Register
                  </button>
                )}
                {eventData.whatsappLink && (
                  <button
                    className="btn"
                    onClick={() =>
                      (window.location.href = eventData.whatsappLink)
                    }
                  >
                    Join WhatsApp
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-white justify-center items-center">
            Loading event details...
          </p>
        )}
      </div>
    </div>
  );
};

export default EventDisplay;
