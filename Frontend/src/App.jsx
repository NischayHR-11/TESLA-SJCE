import Navbar from "./Navbar"
import SplineViewer from "./Spline_Element"
import EventsPage from './events/EventsPage.jsx'; // Events page component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const splineSceneUrl = "https://prod.spline.design/l3ATVUGuNCI6FSu5/scene.splinecode";  // Provided Spline URL.


  return (
    <>
      <Navbar></Navbar>
      {/* <SplineViewer sceneUrl={splineSceneUrl} /> */}
      <Router>
            <Routes>
            <Route path="/events" element={<EventsPage />} /> 
            </Routes>
      </Router>
    </>
  )
}

export default App
