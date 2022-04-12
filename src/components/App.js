import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';

import Welcome from './Welcome/Welcome';

export default function App() {
  return (
    <div className='app-component'>
      <Routes>
        <Route path='/' element={  <Welcome />  } />
      </Routes>
    </div>
  );
}
