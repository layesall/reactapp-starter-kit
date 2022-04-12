import React from 'react';
import './Welcome.css';

export default function Welcome() {
  return (
    <div className='welcome-component'>
      <h2>Welcome in</h2>
      <h1>Nikouone</h1>
      <p>A simple starter kit with necessary dependencies for a React project</p>

      <div className='copyright'>
        &copy; <a href='www.layesall.com'>Layesall</a> 
      </div>
    </div>
  );
}
