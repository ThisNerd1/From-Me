import { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar';
import { useNavigate } from "react-router";


function SubCategory() {
  const [currentColor, setCurrentColor] = useState('transparent');
  let navigate = useNavigate();
  return (
    <>
     <div className={`${currentColor} min-vh-100`}>
    <Navbar
      currentColor={currentColor}
      changeColor={setCurrentColor}
    />
    <h2>Sub-categories</h2>
    <Button onClick={() => navigate("/")} variant="primary">Back</Button>
  </div>
    </>
  )
};

export default SubCategory;
