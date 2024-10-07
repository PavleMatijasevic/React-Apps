import React, { useState } from "react";
import CitySelector from "@/components/CitySelector";
import ActivityTypeSelector from "@/components/ActivityTypeSelector";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";

interface Event {
  name: string;
  city: string;
  type: string;
  date: string;
}

const events: Event[] = [
  { name: "Fudbalski turnir", city: "Beograd", type: "Sportska", date: "2024-10-10" },
  { name: "Turistički obilazak tvrđave", city: "Novi Sad", type: "Turistička", date: "2024-10-12" },
  { name: "Kulturni festival", city: "Niš", type: "Kulturna", date: "2024-11-01" },
  { name: "Obrazovna radionica", city: "Kragujevac", type: "Obrazovna", date: "2024-11-15" },
  { name: "Košarkaški turnir", city: "Beograd", type: "Sportska", date: "2024-10-20" },
  { name: "Atletska trka", city: "Novi Sad", type: "Sportska", date: "2024-11-05" },
  { name: "Biciklistička trka", city: "Niš", type: "Sportska", date: "2024-09-18" },
  { name: "Plivački maraton", city: "Kragujevac", type: "Sportska", date: "2024-10-15" },
  { name: "Teniski turnir", city: "Subotica", type: "Sportska", date: "2024-10-25" },
  { name: "Obilazak Kalemegdana", city: "Beograd", type: "Turistička", date: "2024-10-22" },
  { name: "Vinska tura", city: "Sremski Karlovci", type: "Turistička", date: "2024-11-12" },
  { name: "Krstarenje Dunavom", city: "Novi Sad", type: "Turistička", date: "2024-10-08" },
  { name: "Obilazak manastira", city: "Niš", type: "Turistička", date: "2024-11-18" },
  { name: "Planinarska tura na Fruškoj gori", city: "Novi Sad", type: "Turistička", date: "2024-10-29" },
  { name: "Pozorišna predstava", city: "Beograd", type: "Kulturna", date: "2024-10-18" },
  { name: "Filmski festival", city: "Novi Sad", type: "Kulturna", date: "2024-11-03" },
  { name: "Muzejska noć", city: "Niš", type: "Kulturna", date: "2024-10-27" },
  { name: "Izložba slika", city: "Kragujevac", type: "Kulturna", date: "2024-11-10" },
  { name: "Jazz festival", city: "Subotica", type: "Kulturna", date: "2024-10-12" },
  { name: "IT konferencija", city: "Beograd", type: "Obrazovna", date: "2024-12-05" },
  { name: "Radionica o digitalnom marketingu", city: "Novi Sad", type: "Obrazovna", date: "2024-11-22" },
  { name: "Naučni simpozijum", city: "Niš", type: "Obrazovna", date: "2024-11-15" },
  { name: "Obuka o preduzetništvu", city: "Kragujevac", type: "Obrazovna", date: "2024-10-30" },
  { name: "Seminar o obnovljivim izvorima energije", city: "Zrenjanin", type: "Obrazovna", date: "2024-12-02" },
];

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<string>("Beograd");
  const [selectedType, setSelectedType] = useState<string>("Sportska");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [userEvents, setUserEvents] = useState<Event[]>([]);

  // Filtriranje događaja
  const filteredEvents = events.filter(
    (event) =>
      event.city === selectedCity &&
      event.type === selectedType &&
      event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 // Dodajte ovo u Home komponentu u index.tsx
const addToUserEvents = (event: Event) => {
    setUserEvents((prevEvents) => {
      const updatedEvents = [...prevEvents, event];
      localStorage.setItem("userEvents", JSON.stringify(updatedEvents)); // Sačuvajte u localStorage
      return updatedEvents;
    });
  };
  

  // Funkcija za uklanjanje događaja iz korisnikove liste
  const removeFromUserEvents = (eventToRemove: Event) => {
    setUserEvents((prevEvents) =>
      prevEvents.filter((event) => event.name !== eventToRemove.name)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col justify-center items-center text-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mx-4 text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
          Planiranje događaja u Srbiji
        </h1>

        <CitySelector selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
        <ActivityTypeSelector selectedType={selectedType} setSelectedType={setSelectedType} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <h2 className="text-2xl font-bold mt-6 text-gray-900">Dostupni događaji:</h2>
        <ul className="mt-4 space-y-2">
          {filteredEvents.length === 0 ? (
            <li className="text-gray-600">Nema dostupnih događaja za odabrane kriterijume.</li>
          ) : (
            filteredEvents.map((event, index) => (
              <li key={index} className="bg-purple-100 p-3 rounded-lg shadow-md">
                <p className="text-lg font-semibold">{event.name}</p>
                <p className="text-sm text-gray-700">Datum: {event.date}</p>
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={() => addToUserEvents(event)}
                >
                  Dodaj u moju listu
                </button>
              </li>
            ))
          )}
        </ul>

        <h2 className="text-2xl font-bold mt-6 text-gray-900">Moji planirani događaji:</h2>
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

        <div className="mt-6 text-center">
          <Link href="/my-plans" className="text-blue-600 hover:underline">
            Pogledaj sve moje planirane događaje
          </Link>
        </div>
      </div>
    </div>
  );
}
