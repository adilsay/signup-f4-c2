// import React,{useEffect , useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Components/Signup';
import Profile from './Components/Profile';

function App() {
  return (
  
  <Router>
  <Routes>
    <Route path="/" element={<Signup />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
</Router>

   
  );
}

export default App;
