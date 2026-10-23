import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Components/Profile';
import Category from './Components/Category';
import SubCategory from './Components/SubCategory';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Download from './Components/Download';
import Tracker from './Components/Tracker';
import Folder from './Components/Folder';
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
        <Route path="/Download" element={<Download />} />
        <Route path="/Tracker" element={<Tracker />} />
        <Route path="/Folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App



//cd frontend
//cd from-me
//npm run dev