





import React from "react";
import { Link } from "react-router-dom";
import GTicon from "../../assets/img/GTicon.png";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";


export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="5">
            <h1 className="title">PROJ•HR</h1>
          </Col>
          <Col md="5">
            <img src={GTicon} alt="GTicon" style={{ width: '150px', height: '150px', marginRight: '400px'}} />
          </Col>
          <Col md="2">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" tag={Link}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="Index#signUp" tag={Link}>
                  Sign Up
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
