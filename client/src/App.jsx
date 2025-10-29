// Corrected path to point directly to the 'login' folder, which contains 'index.jsx'
import LoginPage from "../pages/login";
import Signup from "./components/singup/signup.jsx";
import { useState } from "react";
import HomePage from "./HomePage/HomePage";
import CreateHotels from "./CreateHotels/CreateHotels";
import { Toaster } from "react-hot-toast";
function App() {
  // const [isLoginPage, setIsLoginPage] = useState(false);
  // function handlePageSwitch(page) {
  //   setIsLoginPage(page === "login");
  
  return (
    <>
      {/* {isLoginPage ? <LoginPage handlePageSwitch={handlePageSwitch} /> : <Signup handlePageSwitch={handlePageSwitch} />} */}

      <Toaster position="top-right" />
      <LoginPage />
    </>
  );
}

export default App;
