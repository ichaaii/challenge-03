import SearchTodo from "./Search";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TodoHeader = ({ onSearchTodo }) => {
  return (
    <div className="max-w-[900px] mx-3 md:mx-auto">
      <h2 className="font-bold text-4xl text-center text-white pt-5">TodoSearch</h2>
      <div className="border-2 shadow-md px-6 py-8 mt-5 rounded-md">
        <div className="flex flex-col sm:flex-row justify-between sm:space-x-8 space-y-2 sm:space-y-0">
          <div className="sm:w-4/5">
            <SearchTodo onSearchTodo={onSearchTodo} />
          </div>
          <div className="sm:w-1/4 sm:self-end">
            <Link
              className="inline-block text-center font-semibold rounded-md text-white w-full bg-costum-pink hover:bg-indigo-950 active:bg-teal-700 px-8 py-2"
              to="/add-todo"
            >
              Add New Todo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

TodoHeader.propTypes = {
  onSearchTodo: PropTypes.func,
};

export default TodoHeader;