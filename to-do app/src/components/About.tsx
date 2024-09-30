import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">About the Author</h2>
      <p>
        This application was created by Pavle Matijasevic, a passionate web developer with experience in 
        React, TypeScript, and web development. This project is designed to help users manage their tasks efficiently.
      </p>

      <p className="mt-4">
        Feel free to reach out for any questions or collaboration opportunities!
      </p>
    
    </div>
  );
};

export default About;
