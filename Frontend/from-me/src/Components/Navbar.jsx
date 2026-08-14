import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import App from "../App";


function Navbar({changeColor}) { 
  function handleSelect(eventKey) {
  switch (eventKey) {
    case "1":
      changeColor("bg-apple");
      break;
    case "2":
      changeColor("bg-blueberry");
      break;
    case "3":
      changeColor("bg-lemon");
      break;
    case "4":
      changeColor("bg-apricot");
      break;
    case "5":
      changeColor("bg-black");
      break;
  }
}
  return (
    <div className={`p-5 transition-all`}>
    <Nav activeKey="0" onSelect={handleSelect} className="justify-content-center">
      <Nav.Item>
        <Nav.Link eventKey="homepage" href="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="contact page" title="/contact">
          Contact
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="profile page" title="/profile">
          Profile
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Themes" id="nav-dropdown">
        <NavDropdown.Item eventKey="1">Color 1</NavDropdown.Item>
        <NavDropdown.Item eventKey="2">Color 2</NavDropdown.Item>
        <NavDropdown.Item eventKey="3">Color 3</NavDropdown.Item>
        <NavDropdown.Item eventKey="4">Color 4</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="5" id="nav5">Dark Mode</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    </div>
  );
}

export default Navbar;