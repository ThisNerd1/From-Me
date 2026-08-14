import Navbar from './Navbar';
import { useState } from "react";
import Category from './Category';


function Home() {
    const [currentColor, setCurrentColor] = useState('transparent');
  return (
    <>
     <div className={`${currentColor} min-vh-100`}>
    <Navbar
      currentColor={currentColor}
      changeColor={setCurrentColor}
    />
    <h1>Welcome</h1>
    <Category />
  </div>
    </>
  )
}

export default Home;