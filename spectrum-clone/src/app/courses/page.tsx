"use client";
import { useState } from "react";

export default function Courses() {
  const courses = [
    {
      title: "Klavir",
      duration: "3 meseca",
      price: "300 EUR",
      description: "Učenje HTML-a, CSS-a, JavaScript-a i osnovnih framework-a kao što su React i Tailwind CSS.",
    },
    {
      title: "Violina",
      duration: "4 meseca",
      price: "400 EUR",
      description: "Razvoj REST API-ja sa Node.js-om, Express-om i rad sa bazama podataka poput MongoDB-a.",
    },
    {
      title: "Engleski nivo A1",
      duration: "6 meseci",
      price: "600 EUR",
      description: "Kombinovanje frontend i backend znanja kako bi se razvijali kompletni web projekti.",
    },
    {
      title: "Engleski nivo B1",
      duration: "2 meseca",
      price: "250 EUR",
      description: "Osnove dizajna korisničkog interfejsa i iskustva koristeći alate kao što su Figma i Adobe XD.",
    },
    {
      title: "Osnove Python programiranja",
      duration: "3 meseca",
      price: "350 EUR",
      description: "Rad sa alatima kao što su Python i Pandas za analizu podataka i pravljenje modela.",
    },
    {
      title: "Machine Learning",
      duration: "4 meseca",
      price: "500 EUR",
      description: "Izgradnja i treniranje modela mašinskog učenja koristeći scikit-learn i TensorFlow.",
    },
    {
      title: "Slikarska akademija",
      duration: "2 meseca",
      price: "200 EUR",
      description: "Strategije online marketinga, SEO, i vođenje kampanja na društvenim mrežama.",
    },
    {
      title: "Osnove HTML/CSS",
      duration: "3 meseca",
      price: "300 EUR",
      description: "Osnove Python programiranja, rad sa bibliotekama i izgradnja malih projekata.",
    },
    {
      title: "Spanski jezik nivo A1",
      duration: "3 meseca",
      price: "400 EUR",
      description: "Rad sa AWS, Azure i GCP servisima za razvoj cloud aplikacija.",
    },
    {
      title: "Osnove Java programiranja",
      duration: "2 meseca",
      price: "200 EUR",
      description: "Izgradnja i prilagođavanje web stranica koristeći WordPress platformu.",
    },
  ];
  const [searchTerm, setSearchTerm] = useState('');

  // Filtriranje kurseva prema pretraživanju
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      {/* Naslov stranice */}
      <h1 className="text-4xl font-bold text-center my-8">Kursevi</h1>

      {/* Polje za pretraživanje */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Pretraži kurseve..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grid za kurseve */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-100 text-black"
            >
              <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-700">
                <strong>Trajanje:</strong> {course.duration}
              </p>
              <p className="text-gray-700">
                <strong>Cena:</strong> {course.price}
              </p>
              <p className="text-gray-600 mt-4">{course.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">
            Nema kurseva koji odgovaraju vašem pretraživanju.
          </p>
        )}
      </div>
    </div>
  );
}