import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TodoApp from './components/TodoApp';
import About from './components/About';
import Feedback from './components/Feedback';

export interface Todo {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
}


const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-blue-500 p-4">
          <ul className="flex space-x-4 justify-center">
            <li>
              <Link to="/" className="text-white">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white">About</Link>
            </li>
            <li>
              <Link to="/feedback" className="text-white">Feedback</Link>
            </li>
          </ul>
        </nav>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<TodoApp />} />
            <Route path="/about" element={<About />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
