import React from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };

  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <Row>
            <Col md="6">
              <NavbarBrand to="/" tag={Link} id="navbar-brand">
                <span> Graffam • Tapia </span>
                - Project HR
              </NavbarBrand>
              <UncontrolledTooltip placement="bottom" target="navbar-brand">
                Frontend - Colton <br/> Backend - Andy
              </UncontrolledTooltip>
            </Col>
            <Col md="6">
              <button
                aria-expanded={collapseOpen}
                className="navbar-toggler navbar-toggler"
                onClick={toggleCollapse}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </Col>
          </Row>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#rex" onClick={(e) => e.preventDefault()}>
                  PROJECT•HR
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/" tag={Link}>
                <i className="tim-icons icon-single-02" />
                Profile
              </NavLink>
            </NavItem>
            <NavItem className="active">
              <NavLink to="/about" tag={Link}>
                <i className="tim-icons icon-world" />
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#rex">
                <i className="tim-icons icon-settings-gear-63" />
                Settings
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
