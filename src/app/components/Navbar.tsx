"use client";
import Link from "next/link";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export default function MainNavbar() {
  return (
    <Navbar expand="lg" fixed="top" style={{ backgroundColor: "#004080" }} variant="dark" className="shadow-sm">
      <Container>
        {/* Logo & Name */}
        <Navbar.Brand href="/" className="fw-bold text-uppercase">
          <span style={{ color: "#e60000" }}>★</span> THE LUU VISA CONSULTANT
        </Navbar.Brand>

        {/* Toggle button (for mobile) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          {/* Center Navigation Links */}
          <Nav className="me-auto ms-4">
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/countries">Countries</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

          {/* Right Buttons */}
          <div className="d-flex gap-2">
            <Button variant="outline-light" href="/signin">Sign In</Button>
            <Button style={{ backgroundColor: "#e60000", borderColor: "#e60000" }} href="/apply">
              Apply Now →
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}