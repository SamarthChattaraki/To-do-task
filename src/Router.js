// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<TodoPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
