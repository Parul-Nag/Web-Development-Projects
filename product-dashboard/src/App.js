import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
