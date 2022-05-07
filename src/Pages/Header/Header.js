import { UserAddIcon, UserCircleIcon } from "@heroicons/react/solid";
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
    <div style={{backgroundColor:'#6A1B4D', padding:'10px 0', fontFamily:'baloo2, cursive'}}>
      <div className="d-flex justify-content-center align-items-center">
      <img style={{width:'200px'}} className='h-50' src="https://i.postimg.cc/qB689Y0r/grocery-farm-1.png" alt="" />
      <h4 style={{color:'lightgray'}} className="text-center text-uppercase fw-bold">Grocery & organic food farm limited</h4>
      </div>
      <div className="py-2 text-uppercase">
        <Navbar style={{fontSize:'14px'}} collapseOnSelect expand="lg" bg="" variant="dark">
          <Container>
            <Navbar.Brand style={{color:'#E07C24'}}  className="fs-4 mx-auto fw-bold px-2" as={Link} to="/">
              {/* Grocery Farm */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto text-center">
                <Link className="text-white text-decoration-none me-3" to="/">
                  Home
                </Link>
                <Link
                  className="text-white text-decoration-none me-3"
                  to="/inventory"
                >
                  Inventory
                </Link>
                <Link
                  className="text-white text-decoration-none me-3"
                  to="/blogs"
                >
                  Blogs
                </Link>
              </Nav>
              <Nav className="ms-auto text-center">
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
                  Manage Inventory
                </Link>
                  </>
                }
                {
                  !user ?
                    <Link
                  className="text-white text-uppercase text-decoration-none me-3 d-flex flex-column justify-content-center align-items-center"
                  to="/registration"
                >
                  <UserAddIcon style={{height:'25px'}}></UserAddIcon>
                  Registration
                </Link>
                :
                ''
                }
                  {
                    user ? 
                    <Button style={{color:'#E07C24',backgroundColor:'#6A1B4D',border:'none', borderRadius:'8px',padding:'0 5px'}} onClick={userSignOut} className=" fw-normal text-uppercase d-flex flex-column justify-content-center align-items-center" ><UserCircleIcon style={{height:'25px'}}></UserCircleIcon>
                    Log Out</Button> 
                    :
                    <Link
                    className="text-white text-uppercase text-decoration-none me-3 d-flex flex-column justify-content-center align-items-center"
                    to="/login"
                  ><UserCircleIcon style={{height:'25px'}}></UserCircleIcon>
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
