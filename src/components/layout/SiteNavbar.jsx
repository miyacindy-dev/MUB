import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function SiteNavbar() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="mub-navbar"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold">
          🐄 Mad Udderburn
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="mub-navigation" />

        <Navbar.Collapse id="mub-navigation">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/team">
              Our Herd
            </Nav.Link>

            <Nav.Link as={NavLink} to="/events">
              Events
            </Nav.Link>

            <Nav.Link as={NavLink} to="/learn">
              Learn Ultimate
            </Nav.Link>

            <Nav.Link as={NavLink} to="/join">
              Join Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}