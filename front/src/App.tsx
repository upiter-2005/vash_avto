import React from 'react';
import {Header} from './Components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Routes, Route } from "react-router-dom";
import './App.scss';

function App() {
  return (

      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
         
          
        </Routes>
        
      </div>
   
  );
}

export default App;
