import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar';
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import Data from '../Api/data.json';


function SubCategory({selected}) {
  const [currentColor, setCurrentColor] = useState('transparent');
  let navigate = useNavigate();
  const location = useLocation();
  //Checks if the card the user clicks is the same one, both says the same thing
  //console.log(location.state.selected);
  const specificData = Data.categories.filter(item => item.category === location.state.selected);
  console.log(specificData);
  return (
    <>
     <div className={`${currentColor} min-vh-100`}>
    <Navbar
      currentColor={currentColor}
      changeColor={setCurrentColor}
    />
    <h2>{location.state.selected} Subcategories</h2>
    <br/>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Button onClick={() => navigate("/")} variant="primary">Back</Button>
    </div>
    <br/>
    <div className="d-flex justify-content-center gap-3">
    <Card style={{ width: '18rem' }}>
    {specificData.map((i) => {
      return ( 
      <Card.Body key={i.id}>
        <Card.Title>{i.title}</Card.Title>
        <Card.Text>{i.text}</Card.Text>
      </Card.Body>)
    })}
    </Card>
    </div>
  </div>
  </>
  )
};

export default SubCategory;