// pages/my-plans.tsx
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

interface Event {
  name: string;
  city: string;
  type: string;
  date: string;
}

export default function MyPlans() {
  const [userEvents, setUserEvents] = useState<Event[]>(() => {
    // Pokušajte da dobijete prethodno sačuvane događaje iz localStorage
    if (typeof window !== "undefined") {
      const savedEvents = localStorage.getItem("userEvents");
      return savedEvents ? JSON.parse(savedEvents) : [];
    }
    return [];
  });

  // Funkcija za uklanjanje događaja iz korisnikove liste
  const removeFromUserEvents = (eventToRemove: Event) => {
    const updatedEvents = userEvents.filter((event) => event.name !== eventToRemove.name);
    setUserEvents(updatedEvents);
    localStorage.setItem("userEvents", JSON.stringify(updatedEvents));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col justify-center items-center text-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mx-4 text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
          Moji planirani događaji
        </h1>

        <ul className="mt-4 space-y-2">
          {userEvents.length === 0 ? (
            <li className="text-gray-600">Nema planiranih događaja.</li>
          ) : (
            userEvents.map((event, index) => (
              <li key={index} className="bg-green-100 p-3 rounded-lg shadow-md flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">{event.name}</p>
                  <p className="text-sm text-gray-700">Grad: {event.city}</p>
                  <p className="text-sm text-gray-700">Datum: {event.date}</p>
                </div>
                <button
                  className="ml-4 px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  onClick={() => removeFromUserEvents(event)}
                >
                  Ukloni
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
