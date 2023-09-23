import { FiTrash2, FiEdit2 } from "react-icons/fi";
import PropTypes from "prop-types";
import { useState } from "react";

const Todo = ({
  id,
  task,
  completed,
  onEditTodo,
  onDeleteTodo,
  onCompletedTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("");

  const onEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveEditing = (e) => {
    e.preventDefault();

    if (!value) return;

    onEditTodo(id, value);
    setIsEditing(!isEditing);
    setValue("");
  };

  return (
    <>
      {isEditing ? (
        <div className="border-2 px-4 py-4 rounded-md max-w-[900px] mx-3 md:mx-auto">
          <div className="flex items-center">
            <div className="w-full max-w-[900px] mx-3 md:mx-auto">
              <form action="" onSubmit={handleSaveEditing}>
                <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 md:space-y-0">
                  <input
                    type="text"
                    value={value}
                    placeholder={task}
                    onChange={(e) => setValue(e.target.value)}
                    className="border-2 w-full px-4 py-2 rounded-sm"
                  />
                  <button className="font-semibold w-full sm:w-[20%] text-white py-2 bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus:bg-teal-300 rounded-md">
                    Save
                  </button>
                  <button
                    className="font-semibold w-full sm:w-[20%] text-white py-2 bg-costum-red-100 hover:bg-costum-red-200 active:bg-red-500 focus:bg-red-400 rounded-md"
                    onClick={onEditing}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-[900px] mx-3 md:mx-auto flex justify-between items-center  border-2 px-4 py-4 rounded-md">
          <p
            className={`md:font-semibold md:text-lg text-white ${
              completed && "line-through text-costum-orange-200"
            }`}
          >
            {task}
          </p>
          <div className="space-x-2 md:space-x-3">
            <input
              type="checkbox"
              defaultChecked={completed}
              value={completed}
              onChange={() => onCompletedTodo(id)}
            />
            <button className="text-costum-orange-200" onClick={onEditing}>
              <FiEdit2 />
            </button>
            <button className="text-red-600" onClick={() => onDeleteTodo(id)}>
              <FiTrash2 />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

Todo.propTypes = {
  id: PropTypes.number,
  task: PropTypes.string,
  completed: PropTypes.bool,
  onEditTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
  onCompletedTodo: PropTypes.func,
};

export default Todo;