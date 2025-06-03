import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';


function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar />
   <Routes>
   <Route path="/" element={<Landing_Page />} />
   <Route path="/" element={<Login />} />
   <Route path="/" element={<Sign_Up />} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
