import PropTypes from "prop-types";

const TodoAction = ({ onFilteredTodo }) => {
  return (
    <div className="max-w-[900px] mx-3 md:mx-auto my-8">
      <h2 className="text-center font-bold text-4xl mb-5 text-white">TodoList</h2>
      <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-10">
        <button
          className="w-full py-2 rounded-md font-semibold text-white bg-costum-pink-100 hover:bg-costum-pink-200 focus:bg-costum-pink-300"
          value={"all"}
          onClick={(e) => onFilteredTodo(e)}
        >
          All
        </button>
        <button
          className="w-full py-2 rounded-md font-semibold text-white bg-costum-purple-100 hover:bg-costum-purple-200 focus:bg-costum-purple-300"
          value={"done"}
          onClick={(e) => onFilteredTodo(e)}
        >
          Done
        </button>
        <button
          className="w-full py-2 rounded-md font-semibold text-white bg-costum-violet-100 hover:bg-costum-violet-200 focus:bg-costum-violet-300"
          value={"active"}
          onClick={(e) => onFilteredTodo(e)}
        >
          Todo
        </button>
      </div>
    </div>
  );
};

TodoAction.propTypes = {
  onFilteredTodo: PropTypes.func,
};

export default TodoAction;