import { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar';
import { data, useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import Data from '../Api/data.json';


function SubCategory({selected}) {
  const [currentColor, setCurrentColor] = useState('transparent');
  let navigate = useNavigate();
  const location = useLocation();
  //Checks if the card the user clicks is the same one
  //console.log(location.state.selected);
  console.log("Data" + Data.categories);
  return (
    <>
     <div className={`${currentColor} min-vh-100`}>
    <Navbar
      currentColor={currentColor}
      changeColor={setCurrentColor}
    />
    <h2>{location.state.selected}Subcategories</h2>
    <br/>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Button onClick={() => navigate("/")} variant="primary">Back</Button>
    </div>
    <br/>
    <div className="d-flex justify-content-center gap-3">
    <Card style={{ width: '18rem' }}>
      {Data.categories.map((item, i) => {
        <Card.Body key={i}>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.text}</Card.Text>
        </Card.Body>
      })}
    </Card>
    </div>
  </div>
    </>
  )
};

export default SubCategory;