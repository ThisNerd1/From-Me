import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Card, Row, Col, Container } from "react-bootstrap";
import Navbar from './Navbar';
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import Data from '../Api/data.json';


function SubCategory() {
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
    <Container className='d-flex vh-100 justify-content-center'>
      <Row>
        {specificData.map((item, k) => (
            <Col key={k}>
                <Card style={{ width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.text}</Card.Text>
                    </Card.Body>
                  </Card>
              </Col>
            ))}
        </Row>
    </Container>
    </div>
  </>
  )
};

export default SubCategory;