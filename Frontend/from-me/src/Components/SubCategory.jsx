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
    <h2>Subcategories</h2>
    <br/>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Button onClick={() => navigate("/")} variant="primary">Back</Button>
    </div>
    <br/>
    <div className="d-flex justify-content-center gap-3">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Fitness Sub-categories</Card.Title>
        <Card.Text>
          Some text
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Fitness</Card.Title>
        <Card.Text>
          Some text
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Fitness</Card.Title>
        <Card.Text>
          Some text
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  </div>
    </>
  )
};

export default SubCategory;
