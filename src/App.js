// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './layouts/LandingPage';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Home from './pages/Home';

const App = () => {
  return (
    <Router basename="MyPortfolio">
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<Home />} /> {/* Default body content */}
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
