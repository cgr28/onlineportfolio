import "./Nav.scss";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar
      className="navigation mx-auto"
      fixed="top"
      expand="md"
      inverse
      collapseOnSelect
      id="navigation"
      >
      <Navbar.Brand id="main" href="#home">
        {"> Colbe Roberson"}
      </Navbar.Brand>
      <Navbar.Toggle id="toggle" aria-controls="navbarNav"/>
      <Navbar.Collapse id="navbarNav" className="justify-content-end">
        <Nav>
          <Nav.Link className="nav-item" href="#projects">Projects</Nav.Link>
          <Nav.Link className="nav-item" href="#skills">Skills</Nav.Link>
          <Nav.Link className="nav-item" href="#experience">Experience</Nav.Link>
          <Nav.Link className="nav-item" href="#resume">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
