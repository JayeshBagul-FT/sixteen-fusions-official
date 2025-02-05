import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Premium from './components/Premium';
import About from './components/About';
import Review from './components/Contact';
import ServiceMain from './components/Service_Main';
import Contact from './components/Contact';


function App() {
  return (
    <div className='w-screen h-screen m-auto bg-[#171717]'>
      <Navbar />
      {/* Use Routes to render different components based on route */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/service" element={<ServiceMain />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
