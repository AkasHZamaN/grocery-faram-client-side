import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const userSignOut = () =>{
    signOut(auth);
  }
  return (
    <div className="bg-success">
      <div className="py-2">
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
          <Container>
            <Navbar.Brand className="bg-danger bg-opacity-75 px-2 rounded-3" as={Link} to="/">
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
                {
                  user && <>
                  <Link
                  className="text-white text-decoration-none me-3"
                  to="/myProduct"
                >
                  My Product
                </Link>
                <Link
                  className="text-white text-decoration-none me-3"
                  to="/addProduct"
                >
                  Add Product
                </Link>
                <Link
                  className="text-white text-decoration-none me-3"
                  to="/myInventory"
                >
                  My Inventory
                </Link>
                  </>
                }
                {
                  !user ?
                  <Link
                  className="text-white text-decoration-none me-3"
                  to="/registration"
                >
                  Registration
                </Link>
                :
                ''
                }
                  {
                    user ? 
                    <Button onClick={userSignOut} className="bg-danger border-0 bg-opacity-75 rounded-3" >Log Out</Button> 
                    :
                    <Link
                    className="text-white text-decoration-none me-3"
                    to="/login"
                  >
                    Login
                  </Link>
                  } 
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
