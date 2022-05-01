import React from "react";
import { Offcanvas, Nav } from "react-bootstrap";

export default function NavbarOffcanvas() {
  return (
    <>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              window.location.href = "/movies";
            }}
          >
            Movies
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              window.location.href = "/tv";
            }}
          >
            TV
          </Nav.Link>
        </Nav.Item>
      </Offcanvas.Body>
    </>
  );
}
