import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';

// Import of the components
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Welcome from './Welcome/Welcome';
import Notfound from './Notfound/Notfound';

export default function App() {

  return (
    <div className='app-component' >
      <Navbar />
      <Routes>
        <Route path='/' element={  <Welcome />  } />
        <Route path='*' element={ <Notfound /> } />
      </Routes>
      <Footer />
    </div>
  );
}
