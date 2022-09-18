import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark">
      <Container>
        <h6 style={{ color: "white", textDecoration: "none" }}>
          <a
            className="d-flex justify-content-center"
            href="https://github.com/charlescampista"
            style={{ color: "white", padding: "4em" }}
          >
            Developed By Charles Campista
          </a>
        </h6>
      </Container>
    </footer>
  );
}
