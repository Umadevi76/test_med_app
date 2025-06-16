import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import HomePage from './Components/ServiceCard/HomePage';
import FindDoctorSearch from './Components/Appointment/FindDoctorSearch/FindDoctorSearch';


function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar />
   
   <Routes>
   <Route path="/" element={<Landing_Page />} />
   <Route path="/Login" element={<Login />} />
   <Route path="/signup" element={<Sign_Up />} />
   <Route path="/instant-consultation" element={<InstantConsultation />} />
   <Route path="/book-appointment" element={<FindDoctorSearch />} />
   <Route path="/home" element={<HomePage />} />
   </Routes>
   
   </BrowserRouter>
   </>
  );
}

export default App;
