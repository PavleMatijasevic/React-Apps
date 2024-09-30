import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

export interface Todo {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (name: string, description: string) => {
    const newTodo: Todo = { id: Date.now(), name, description, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: number, newName: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, name: newName } : todo
    ));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">To-Do List</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
      </div>
    </div>
  );
};

export default TodoApp;
