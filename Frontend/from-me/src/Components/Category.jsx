import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router";

function Category() {
  let navigate = useNavigate();
  const [selected, setSelected] = useState("");
  function fitnessChoice() {
    navigate("/Subcategory", {
      // Take this with you
    state: {selected: "Fitness" }
    });
  }
  function careerChoice() {
    navigate("/Subcategory", {
    state: {selected: "Career" }
    });
  }
  function socialChoice() {
    navigate("/Subcategory", {
    state: {selected: "Social" }
    });
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