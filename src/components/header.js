import * as React from "react"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"

const Header = () => (

  <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
  <Container>
  <Navbar.Brand href="/">ValuesU</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavDropdown title="Media" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Bite Size</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Full Course</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Elders Series</NavDropdown.Item>
        <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Podcast</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="About Us" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Our Mission</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Featured Contributors</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Press</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
      <NavDropdown title="Get Involved" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Events</NavDropdown.Item>
        <NavDropdown.Item href="/donate">Become a Member</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
)

export default Header
