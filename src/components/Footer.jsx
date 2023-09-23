import PropTypes from "prop-types";

const TodoFooter = ({ onDeleteAllTodo, onDeleteDoneTodo }) => {
  return (
    <div className= "max-w-[900px] mx-3 md:mx-auto mt-12 pb-10">
      <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0">
        <button
          className="w-full font-semibold text-white px-8 py-2 rounded-md bg-costum-red-100 hover:bg-costum-red-200 active:bg-red-500 focus:bg-red-400"
          onClick={() => onDeleteDoneTodo()}
        >
          Delete Done Task
        </button>
        <button
          className="w-full font-semibold text-white px-8 py-2 rounded-md bg-costum-red-100 hover:bg-costum-red-200 active:bg-red-500 focus:bg-red-400"
          onClick={() => onDeleteAllTodo()}
        >
          Delete All Task
        </button>
      </div>
    </div>
  );
};

TodoFooter.propTypes = {
  onDeleteAllTodo: PropTypes.func,
  onDeleteDoneTodo: PropTypes.func,
};

export default TodoFooter;