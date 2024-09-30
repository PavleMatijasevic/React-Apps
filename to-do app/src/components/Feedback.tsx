import React, { useState } from 'react';

const Feedback: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Feedback</h2>
      {submitted ? (
        <p className="text-green-500">Thank you for your feedback, {name}!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="p-2 border border-gray-300 rounded-md"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your feedback or questions"
            className="p-2 border border-gray-300 rounded-md"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
