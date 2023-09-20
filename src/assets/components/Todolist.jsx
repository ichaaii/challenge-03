import React from 'react'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex items-center justify-between ${
            todo.completed ? 'line-through text-gray-500' : ''
          }`}
        >
          <span>{todo.task}</span>
          <div>
            <button
              onClick={() => toggleTodo(todo.id)}
              className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
            >
              {todo.completed ? 'Uncheck' : 'Check'}
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
