import React from "react";

interface ActivityTypeSelectorProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
}

const ActivityTypeSelector: React.FC<ActivityTypeSelectorProps> = ({ selectedType, setSelectedType }) => {
  const activityTypes = ["Sportska", "Turistička", "Kulturna", "Obrazovna"];

  return (
    <div className="mb-4">
      <label htmlFor="activityType" className="block text-sm font-medium text-gray-700">
        Odaberi vrstu aktivnosti:
      </label>
      <select
        id="activityType"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
      >
        {activityTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ActivityTypeSelector;
