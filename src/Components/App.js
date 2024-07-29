import './App.css';
import Navbar from './Navbar_Section/Navbar';
import Home from './Hero_Section/Home';
import About from './About_Section/About';
import Skill from './Skill_Section/Skill';
import Service from './Service_Section/Service';
import Projects from './MyProjects/Projects';
import Contact from './Contact_Section/Contact';
import Footer from './Footer_Section/Footer';
import ScrollUp from './ScrollUp/ScrollUp';

function App() {
  return (
    <>
      <Navbar />
      <main className='main'>
        <Home />
        <About />
        <Skill />
        <Service />
        <Projects />
        <Contact />
      </main>
        <Footer />
        <ScrollUp />
    </>
  );
}

export default App;
