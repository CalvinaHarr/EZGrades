import React from 'react';
import './App.css';
import GPA from './GPA';


function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>EZGrades</h1>
      </div>
      <button>
        Sign in
      </button>
      <button>
        Register
      </button>
    </header>
  );
}

function App() {
  return(
    <div>
      <Header />
      <GPA />
    </div>
  );
}

export default App;