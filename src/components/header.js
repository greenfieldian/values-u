import * as React from "react"
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap"
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => (

  <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" className="py-4">
  <Container>
  <Navbar.Brand href="/">
    <StaticImage 
      src="../images/values-u logo idea 2.png"
      height={30}
    />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <NavDropdown title="Media" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/series/bite-size">Bite Size</NavDropdown.Item>
        <NavDropdown.Item href="/series/full-course">Full Course</NavDropdown.Item>
        <NavDropdown.Item href="/series/elders">Elders Series</NavDropdown.Item>
        <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
        <NavDropdown.Item href="/podcast">Podcast</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="About Us" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/about">Our Mission</NavDropdown.Item>
        <NavDropdown.Item href="/contributors">Featured Contributors</NavDropdown.Item>
        <NavDropdown.Item href="/press">Press</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/contact" className="nav-item">Contact Us</Nav.Link>
      <NavDropdown title="Get Involved" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/events">Events</NavDropdown.Item>
        <NavDropdown.Item href="/donate">Become a Member</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Button className="nav-item">Join</Button>
    <Button className="nav-item">Donate</Button>
  </Navbar.Collapse>
  </Container>
</Navbar>
)

export default Header
