import React from 'react';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />
      
      {/* Main content area with permanent left margin for sidebar */}
      <div 
        className="ml-60"
        style={{ paddingTop: '80px' }} // Add padding to account for fixed navbar
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Main Content Area</h1>
          <p>This is where your main application content will be displayed.</p>
        </div>
      </div>
    </div>
  );
}

export default App;