import './App.css';
import Navbar from './Components/Navbar_Section/Navbar';
import Footer from './Components/Footer_Section/Footer';
import ScrollUp from './Components/ScrollUp/ScrollUp';
import Landing from './pages/Home/Landing';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import { useEffect, useState } from 'react';
import Project_Detail from './pages/Project_Detail/Project_Detail';
import ParticlesComponent from './Components/Particles/particles';


function App() {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show loading for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }


  return (
    <Router>
          <ParticlesComponent  id="partiicles"/>
        <Navbar />
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/project-details/:id" element={<Project_Detail />} />
        </Routes>
        <Footer />
        <ScrollUp />
    </Router>
  );
}

export default App;
