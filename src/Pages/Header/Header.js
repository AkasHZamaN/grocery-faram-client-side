import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-success">
      <div className="py-2">
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Grocery Farm
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link className="text-white text-decoration-none me-3" to="/">
                  Home
                </Link>
                <Link
                  className="text-white text-decoration-none me-3"
                  to="/inventory"
                >
                  Inventory
                </Link>
              </Nav>
              <Nav>
                <Link
                  className="text-white text-decoration-none me-3"
                  to="/registration"
                >
                  Registration
                </Link>
                <Link
                  className="text-white text-decoration-none me-3"
                  to="/login"
                >
                  Login
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
