import Navbar from './Navbar';
import { useState } from "react";


function Folder() {
    const [currentColor, setCurrentColor] = useState('transparent');
  return (
    <>
     <div className={`${currentColor} min-vh-100`}>
    <Navbar
      currentColor={currentColor}
      changeColor={setCurrentColor}
    />
    <br/>
    {/*Everything in the folder displayed CRUD contents and redownload*/}
    Folder + contents
  </div>
    </>
  )
}

export default Folder;