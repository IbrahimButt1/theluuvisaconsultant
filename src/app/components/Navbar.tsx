"use client";

import Link from "next/link";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export default function MainNavbar() {
  return (
    <Navbar expand="lg" fixed="top" style={{ backgroundColor: "#004080" }} variant="dark" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} href="/" className="fw-bold text-uppercase">
          <span style={{ color: "#e60000" }}>★</span> THE LUU VISA CONSULTANT
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto ms-4">
            <Nav.Link as={Link} href="/services">Services</Nav.Link>
            <Nav.Link as={Link} href="/countries">Countries</Nav.Link>
            <Nav.Link as={Link} href="/about">About</Nav.Link>
            <Nav.Link as={Link} href="/contact">Contact</Nav.Link>
          </Nav>
          <div className="d-flex gap-2">
            <Button as={Link} href="/signin" variant="outline-light">
              Sign In
            </Button>
            <Button
              as={Link}
              href="/apply"
              style={{ backgroundColor: "#e60000", borderColor: "#e60000" }}
            >
              Apply Now →
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}