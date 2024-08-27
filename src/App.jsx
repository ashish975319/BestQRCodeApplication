// src/App.jsx
import React from "react";
import AppRoutes from "./components/Approutes";

const App = () => {
  return (
    <div className="App min-h-screen bg-gray-100">
      <AppRoutes /> {/* Include the routing component */}
    </div>
  );
};

export default App;
