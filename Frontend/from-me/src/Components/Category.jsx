import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import Data from '../Api/data.json';


function Category() {
  let navigate = useNavigate();
  //What does this do, write it down
  const categoryData = [...new Map(Data.categories.map(item => [item.category, item])).values()];
  //What does this do, write it down
  function userChoice(item) {
    navigate("/Subcategory", {
      state: {selected: item.category}
    });
  }
  return (
    <>
    <Container className='d-flex vh-100 justify-content-center'>
      <Row>
        {categoryData.map((item, k) => (
            <Col key={k}>
              {/* How does this work? */}
                <Card style={{ width: '18rem'}} onClick={() => userChoice(item)}>
                    <Card.Body>
                        <Card.Title>{item.category}</Card.Title>
                    </Card.Body>
                  </Card>
              </Col>
            ))}
        </Row>
    </Container>
    </>
  )
}

export default Category;