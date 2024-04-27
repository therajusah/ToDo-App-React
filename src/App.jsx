const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Welcome to To Do App
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <input
            id="title"
            type="text"
            placeholder="Title"
            className="border-b-2 border-blue-400 p-2 rounded-md mb-4 md:mb-0 focus:outline-none focus:border-blue-600 bg-transparent text-gray-800 mr-2 placeholder-gray-600"
          />
          <input
            id="description"
            type="text"
            placeholder="Description"
            className="border-b-2 border-blue-400 p-2 rounded-md mb-4 md:mb-0 focus:outline-none focus:border-blue-600 bg-transparent text-gray-800 mr-2 placeholder-gray-600"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:bg-blue-700">
            Add Task
          </button>
        </div>

        <div className="flex pt-6">
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md focus:outline-none focus:bg-red-700 mr-3">To Do</button>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md focus:outline-none focus:bg-green-700 ml-3">Completed Task</button>
        </div>
      </div>
    </div>
  );
};

export default App;
