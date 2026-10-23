import Navbar from './Navbar';
import { useState } from "react";


function Tracker() {
    const [currentColor, setCurrentColor] = useState('transparent');
  return (
    <>
     <div className={`${currentColor} min-vh-100`}>
    <Navbar
      currentColor={currentColor}
      changeColor={setCurrentColor}
    />
    <br/>
    {/* The full tracker in its own table Below */}
    Tracker Table
  </div>
    </>
  )
}

export default Tracker;