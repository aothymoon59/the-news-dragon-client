import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
      </div>
      <div className="d-flex gap-3 bg-light p-3 rounded">
        <Button variant="danger rounded-0">Latest</Button>
        <Marquee className="text-danger" gradient={false} speed={30}>
          Chelsea 0-2 Real Madrid (agg 0-4): Blues are OUT of the Champions
          League as the defending champions prove too strong with ruthless
          Rodrygo scoring twice to cruise into semi-finals... Real hero Rodrygo
          stars with a double as Toni Kroos pulls the midfield strings... but
          despite Reece James causing the Spanish side problems, Trevoh
          Chalobah's wild lunge proves costly for Chelsea
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="dark">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
