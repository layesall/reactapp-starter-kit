import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import Welcome from './Welcome/Welcome';

export default function App() {
  return (
    <div className='app-component'>
      <Navbar />
      <Routes>
        <Route path='/' element={  <Welcome />  } />
        <Route path='*' element={ <Welcome /> } />
      </Routes>
      <Footer />
    </div>
  );
}
