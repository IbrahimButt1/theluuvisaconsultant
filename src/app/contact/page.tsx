"use client";
import { Container, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4">Contact Us</h2>
      <Form className="shadow p-4 rounded bg-white">
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
        <Button variant="primary" type="submit">Send Message</Button>
      </Form>
    </Container>
  );
}