// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import MealDetail from './pages/MealDetail';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/meal/:id" element={<MealDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
