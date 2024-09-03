// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import './style.css';  // Import styles here

const App = () => {
  return (

  
    <Router>
      <Routes>
        <Route path="/" element={<TodoPage />} />
      </Routes>
    </Router>
  
  );
};

export default App;
