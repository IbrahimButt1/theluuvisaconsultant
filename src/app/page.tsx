"use client";
import { Container, Button } from "react-bootstrap";

export default function Home() {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100"
             style={{ background: "linear-gradient(to bottom, #ffffff, #f1f5fc)" }}>
      <Container>
        <h1 className="display-4 fw-bold mb-3" style={{ color: "var(--primary-blue)" }}>
          Navigate Your Future with <span style={{ color: "var(--accent-red)" }}>LUU Visa Consultant</span>
        </h1>
        <p className="lead text-secondary mb-4">
          Visa Study • Work Permit • Immigration Guidance <br />
          Professional support to open global opportunities.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Button size="lg" style={{ backgroundColor: "var(--accent-red)", borderColor: "var(--accent-red)" }}>
            Check Eligibility
          </Button>
          <Button size="lg" variant="outline-dark">
            Explore Services
          </Button>
        </div>
      </Container>
    </section>
  );
}