"use client";
import { Container, Card, Row, Col } from "react-bootstrap";

const services = [
  { title: "Study Visa", desc: "Student visas for major countries.", color: "var(--primary-blue)" },
  { title: "Work Permit", desc: "Secure global work opportunities.", color: "var(--accent-red)" },
  { title: "Immigration", desc: "Residency & relocation support.", color: "var(--primary-blue)" },
  { title: "Travel Assistance", desc: "End-to-end documentation help.", color: "var(--accent-red)" },
];

export default function Services() {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-5" style={{ color: "var(--primary-blue)" }}>
        Our Visa & Work Permit Services
      </h2>
      <Row>
        {services.map((s, i) => (
          <Col md={6} lg={3} key={i} className="mb-4">
            <Card className="shadow h-100 border-0">
              <Card.Body className="text-center">
                <h4 style={{ color: s.color }}>{s.title}</h4>
                <p className="text-muted">{s.desc}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}