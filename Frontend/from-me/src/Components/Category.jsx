import { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router";

function Category() {
  let navigate = useNavigate();
  function fitnessChoice() {
    console.log("You clicked fitness!");
    navigate("/Subcategory");
  }
  function careerChoice() {
    console.log("You clicked career!");
    navigate("/Subcategory");
  }
  function socialChoice() {
    console.log("You clicked social!");
    navigate("/Subcategory");
  }
  return (
    <>
    <div className="d-flex justify-content-center gap-3">
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Fitness</Card.Title>
      <Card.Text>
        Some text
      </Card.Text>
      {/* <Button onClick={() => navigate("/Subcategory")} variant="primary"> */}
      <Button onClick={fitnessChoice} variant="primary">
        More Specific
      </Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Social</Card.Title>
      <Card.Text>
        Some text
      </Card.Text>
      <Button onClick={socialChoice} variant="primary">
        More Specific
      </Button>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Career</Card.Title>
      <Card.Text>
        Some text
      </Card.Text>
      <Button onClick={careerChoice} variant="primary">
        More Specific
      </Button>
    </Card.Body>
  </Card>
</div>
    </>
  )
}

export default Category;