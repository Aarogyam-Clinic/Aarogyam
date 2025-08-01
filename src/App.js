import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Reviews from './components/Reviews';
import Awards from './components/Awards';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer'; // ✅ Import Footer
import Services from './components/Services';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavbarComponent />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/contact-us" element={<Contact />} />
                        <Route path="/our-services" element={<Services />} />

          </Routes>
        </main>
        <Footer /> {/* ✅ Always visible */}
      </div>
    </Router>
  );
}

export default App;
