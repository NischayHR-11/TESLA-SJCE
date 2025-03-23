import Navbar from "./Navbar"
import EventsPage from './events/EventsPage.jsx'; // Events page component
import HomePage from './HomePage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {



  return (
    <>
      <Navbar></Navbar>
      <Router>
            <Routes>
            <Route path="/events" element={<EventsPage />} /> 
            <Route path="/home" element={<HomePage />} /> 
            </Routes>
      </Router>
    </>
  )
}

export default App
