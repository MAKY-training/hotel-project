// src/App.jsx

// Corrected path to point directly to the 'login' folder, which contains 'index.jsx'
import HomePage from "./HomePage/HomePage";
import LoginPage from "../pages/login";
import CreateHotels from "./CreateHotels/CreateHotels";
import { Toaster } from "react-hot-toast";

function App() {
  // Currently only displays the login page
  return (
    <>
      <Toaster position="top-right" />
      <HomePage />
    </>
  );
}

export default App;
