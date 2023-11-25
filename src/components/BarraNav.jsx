import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const BarraNav = () => {
  return (
    <div>
      <Navbar bg="danger" variant="danger" color="text-white">
        <Container className="justify-content-start">
          <Nav className="me-auto">
            
              <div >
                <Link
                  to="/home"
                  className="text-white ms-3 text-decoration-none"
                >
                  Home
                </Link>
                <Link
                  to="/contacto"
                  className="text-white ms-3 text-decoration-none"
                >
                  Contacto
                </Link>
              </div>
            
          </Nav>
          <Navbar.Brand className="text-white ms-3 text-decoration-none">
            {" "}
            Happy Cake
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default BarraNav;
