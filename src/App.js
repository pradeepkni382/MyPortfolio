// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import Announcements from './pages/Announcements';
import OurApps from './pages/OurApps';
import Privacy from './pages/Privacy';
import Support from './pages/Support';
import Contact from './pages/Contact';
import About from './pages/About';
import Blogs from './pages/Blogs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<OurApps />} /> {/* Default body content */}
          <Route path="announcements" element={<Announcements />} />
          <Route path="ourapps" element={<OurApps />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="support" element={<Support />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
