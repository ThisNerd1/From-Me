import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Components/Profile';
import Category from './Components/Category';
import SubCategory from './Components/SubCategory';
import Contact from './Components/Contact';
import Home from './Components/Home';
import './Styles/App.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Subcategory" element={<SubCategory />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App



//cd frontend
//cd from-me
//npm run dev