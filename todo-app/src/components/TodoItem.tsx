import React, { useState } from 'react';
import { Todo } from '../App';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newName: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(todo.name);

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editTodo(todo.id, newName);
    setIsEditing(false);
  };

  return (
    <li className="flex flex-col mb-2 p-2 bg-gray-100 rounded-md shadow-sm">
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="flex">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
          <button type="submit" className="ml-2 p-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Save
          </button>
        </form>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <span
              className={`flex-1 cursor-pointer ${todo.isCompleted ? 'line-through text-gray-500' : 'text-black'}`}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.name}
            </span>
            <button
              onClick={() => setIsEditing(true)}
              className="ml-4 p-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="ml-4 p-1 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </div>
          <p className="text-sm text-gray-600">{todo.description}</p>
        </>
      )}
    </li>
  );
};

export default TodoItem;
