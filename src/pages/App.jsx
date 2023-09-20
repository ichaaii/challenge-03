import React, { useState, useEffect } from 'react';
import '../assets/css/App.css';
import TodoList from '../assets/components/Todolist';
import data from '../data/data.json'

function App() {
  const [todos, setTodos] = useState(data);
  const [newTodo, setNewTodo] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    // Simpan data ke localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoObj = {
        id: todos.length + 1,
        task: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoObj]);
      setNewTodo('');
    }
  };

  return (
    <div className="App container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">To-Do List</h1>
      <div className="mb-4">
        <input
          type="text"
          className="px-2 py-1 border rounded w-full"
          placeholder="Add new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 ml-2"
        >
          Add
        </button>
      </div>
      <div className="mb-4">
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
          Show Completed
        </label>
      </div>
      <TodoList
        todos={showCompleted ? todos : todos.filter((todo) => !todo.completed)}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;