import React from "react";

interface CitySelectorProps {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

const CitySelector: React.FC<CitySelectorProps> = ({ selectedCity, setSelectedCity }) => {
  const cities = ["Beograd", "Novi Sad", "Niš", "Kragujevac"];

  return (
    <div className="mb-4">
      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
        Odaberi grad:
      </label>
      <select
        id="city"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
      >
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
