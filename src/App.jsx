import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import AddTodo from "./pages/AddTodo";
import todosData from "./data/data.json";


const App = () => {
  const [todos, setTodos] = useState(todosData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

//ADD TODO
  const handleAddTodo = (task) => {
    const newTodo = [
      ...todos,
      {
        id: +new Date(),
        task,
        completed: false,
      },
    ];

    setTodos(newTodo);
  };

  const handleEditTodo = (id, task) => {
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id === id ? { ...todo, task } : todo;
      })
    );
  };

 // DELETE TODO
  const handleDeleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
   
  //COMPLETED
  const handleToggleCompleted = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  //SEARCH TODO
  const handleSearchTodo = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const newFilteredTodos = todos.filter((todo) => {
      return todo.task.toLocaleLowerCase().includes(searchQuery.toLowerCase());
    });

    setFilteredTodos(newFilteredTodos);
  }, [todos, searchQuery]);

  //DELETE ALL
  const handleDeleteAllTodo = () => {
    const confirmed = window.confirm("Apakah anda yakin ingin menghapus semua data?");
    if (confirmed) setTodos([]);
  };

  const handleDeleteDoneTodo = () => {
    setTodos((todos) => todos.filter((todo) => !todo.completed));
  };

  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: (
            <Home
              todos={filteredTodos}
              onEditTodo={handleEditTodo}
              onDeleteTodo={handleDeleteTodo}
              onSearchTodo={handleSearchTodo}
              onCompletedTodo={handleToggleCompleted}
              onDeleteAllTodo={handleDeleteAllTodo}
              onDeleteDoneTodo={handleDeleteDoneTodo}
            />
          ),
        },
        {
          path: "/add-todo",
          element: <AddTodo onAddTodo={handleAddTodo} />,
        },
      ])}
    />
  );
};

export default App;