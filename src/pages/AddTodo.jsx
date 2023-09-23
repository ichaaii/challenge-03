import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Form } from "react-router-dom";
import PropTypes from "prop-types";


const AddTodo = ({ onAddTodo }) => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;

    onAddTodo(value);
    navigate("/");
  };

  return (
    <div className=" pt-10 bg-custom-bg">
      <div className="max-w-[900px] mx-3 md:mx-auto">
        <h2 className="font-bold text-4xl text-center mb-5 text-white">TodoInput</h2>
        <div className="shadow-md border-2 px-6 py-10 rounded-md">
          <Form action="/" method="POST" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                className="border-2 px-4 py-2 mb-3 rounded-md"
              />
              <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-10"> 
              <button className="text-center font-semibold w-full text-white py-2  rounded-md bg-costum-orange-100 hover:bg-costum-orange-200 active:bg-red-400">
                Add Todo
              </button>
              <Link
                className="text-center font-semibold w-full text-white py-2 rounded-md bg-costum-red-100 hover:bg-costum-red-200 active:bg-red-500 focus:bg-red-400"
                to="/"
              >
                Cancel
              </Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

AddTodo.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodo;
