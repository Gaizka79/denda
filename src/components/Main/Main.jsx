import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Productos from "./Productos/Productos";
import About from "./About/About";

function Main () {
  return (
    <main className="main">
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Productos/>} path='/Productos'/>
        <Route element={<About/>} path='/About'/>
      </Routes>
    </main>
  )
  
}

export default Main;
