import { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router";

function Category() {
  let navigate = useNavigate();
  return (
    <>
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Fitness</Card.Title>
        <Card.Text>
          Some text
        </Card.Text>
        <Button onClick={() => navigate("/Subcategory")} variant="primary">More Specific</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Category;