import React, { useState } from 'react';

interface AddTodoProps {
  addTodo: (name: string, description: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;
    addTodo(name, description);
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2 mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task name"
        className="p-2 border border-gray-300 rounded-md"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
        className="p-2 border border-gray-300 rounded-md"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;
