import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Capsules from './pages/Capsules';
import CreateCapsule from './pages/CreateCapsule';

import './capsules.css'
import './createCapsule.css'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capsules" element={<Capsules />} />
        <Route path="/create-capsule" element={<CreateCapsule />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
