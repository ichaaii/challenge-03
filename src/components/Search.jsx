import PropTypes from "prop-types";
import { useState } from "react";

const SearchTodo = ({ onSearchTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearchTodo(value);
    setValue("");
  };

  return (
    <form action="" onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col space-y-5">
        <input
          type="text"
          className="border-4 rounded-md w-full py-2 px-4"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="font-semibold text-white rounded-md bg-costum-blue-100 hover:bg-costum-blue-200 focus:bg-sky-700 px-8 py-2 ">
          Search
        </button>
      </div>
    </form>
  );
};

SearchTodo.propTypes = {
  onSearchTodo: PropTypes.func,
};

export default SearchTodo;