import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Category from './Components/Category';
import SubCategory from './Components/SubCategory';
import Home from './Components/Home';
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category" element={<Category />} />
        <Route path="//Subcategory" element={<SubCategory />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App



//cd frontend
//cd from-me
//npm run dev