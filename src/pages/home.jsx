import { useState, useEffect } from "react";

const Home = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getExistingTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(getExistingTodos);
  }, []);

  const getTodo = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (todo.trim() === '') return;

    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodo('');
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="todos__ text-center max-w-lg mx-auto p-4">
      <h1 className="font-bold text-2xl mb-4">My Todo List</h1>

      <div className="todos-body bg-gray-100 p-4 rounded-lg shadow-lg">
        <div className="todos-header flex items-center mb-4">
          <input
            value={todo}
            onChange={getTodo}
            type="text"
            placeholder="Add todos"
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            +
          </button>
        </div>

        <div className="todos-list space-y-2">
          {todos.map((todo, index) => (
            <div key={index} className="flex items-center p-2 bg-white rounded-lg shadow-sm">
              <input
                type="checkbox"
                className="mr-2"
              />
              <p className="text-gray-700 flex-1">{todo}</p>
              <button
                onClick={() => deleteTodo(index)}
                className="bg-red-500 text-white p-2 rounded ml-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
