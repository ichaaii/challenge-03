import { useState } from "react";
import PropTypes from "prop-types";
import TodoHeader from "../components/Header";
import Todo from "../components/Todo";
import Filter from "../components/Filter";
import Footer from "../components/Footer";

const Home = ({
  todos,
  onEditTodo,
  onDeleteTodo,
  onSearchTodo,
  onDeleteAllTodo,
  onCompletedTodo,
  onDeleteDoneTodo,
}) => {
  const [queryParams, setQueryParams] = useState("all");

  const handleFiltered = (e) => {
    setQueryParams(e.target.value);
  };

  let filteredTodoByParams;
  if (queryParams === "all") {
    filteredTodoByParams = todos;
  } else if (queryParams === "done") {
    filteredTodoByParams = todos.filter((todo) => todo.completed);
  } else {
    filteredTodoByParams = todos.filter((todo) => !todo.completed);
  }

  return (
    <div className="bg-custom-bg ">
      <TodoHeader onSearchTodo={onSearchTodo} />
      <Filter onFilteredTodo={handleFiltered} />
      {todos.length > 0 ? (
        <div className="space-y-4 mt-10">
          {filteredTodoByParams?.map((todo) => {
            return (
              <div key={todo.id}>
                <Todo
                  key={todo.id}
                  id={todo.id}
                  task={todo.task}
                  completed={todo.completed}
                  onEditTodo={onEditTodo}
                  onDeleteTodo={onDeleteTodo}
                  onCompletedTodo={onCompletedTodo}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="my-10">
          <h1 className="flex items-center justify-center font-bold text-2xl text-red-500 italic">
            Not Found
          </h1>
        </div>
      )}
      <Footer
        onDeleteAllTodo={onDeleteAllTodo}
        onDeleteDoneTodo={onDeleteDoneTodo}
      />
    </div>
  );
};

Home.propTypes = {
  todos: PropTypes.array,
  onEditTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
  onCompletedTodo: PropTypes.func,
  onSearchTodo: PropTypes.func,
  onDeleteAllTodo: PropTypes.func,
  onDeleteDoneTodo: PropTypes.func,
};

export default Home;