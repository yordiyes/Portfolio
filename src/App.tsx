import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/sections/Hero';
import About from './pages/sections/About';
import Services from './pages/sections/Services';
import Portfolio from './pages/sections/Portfolio';
import Contact from './pages/sections/Contact';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
