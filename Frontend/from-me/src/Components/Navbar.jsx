import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbar() { 
  const [currentColor, setCurrentColor] = useState('bg-transparent');
  function handleSelect(eventKey){
    if(`${eventKey}` == "1"){
      //change the color here
      setCurrentColor('bg-apple');
    }
    if(`${eventKey}` == "2"){
      //change the color here
      setCurrentColor('bg-blueberry');
    }
    if(`${eventKey}` == "3"){
      //change the color here
      setCurrentColor('bg-lemon');
    }
    if(`${eventKey}` == "4"){
      //change the color here
      setCurrentColor('bg-apricot');
    }
    if(`${eventKey}` == "5"){
      //change the color here
      setCurrentColor('bg-black');
    }
  }
  //console.log(handleSelect);
  return (
    <div className={`p-5 transition-all ${currentColor}`}>
    <Nav activeKey="0" onSelect={handleSelect} className="justify-content-center">
      <Nav.Item>
        <Nav.Link eventKey="homepage" href="#/home">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="contact page" title="#/contact">
          Contact
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="profile page" title="#/profile">
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