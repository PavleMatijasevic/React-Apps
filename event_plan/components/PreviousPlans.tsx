import React from "react";

interface PreviousPlansProps {
  plans: { city: string; activityType: string; date: string }[];
}

const PreviousPlans: React.FC<PreviousPlansProps> = ({ plans }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">Prethodni planovi</h2>
      {plans.length === 0 ? (
        <p className="text-gray-600">Nema prethodnih planova.</p>
      ) : (
        <ul className="list-disc pl-5 space-y-2">
          {plans.map((plan, index) => (
            <li key={index} className="text-gray-800">
              <span className="font-bold">{plan.city}</span> - {plan.activityType} dana {plan.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PreviousPlans;
