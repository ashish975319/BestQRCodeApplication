import React from "react";
import AppRoutes from "./routes"; // Ensure this path is correct

const App = () => {
  return (
    <div className="App min-h-screen bg-gray-100">
      <AppRoutes /> {/* Include the routing component */}
    </div>
  );
};

export default App;
