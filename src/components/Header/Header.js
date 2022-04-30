import {
  Navbar,
  Form,
  FormControl,
  Container,
  Button,
  Nav,
} from "react-bootstrap";
export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav>
          <Nav.Item>
            <h2>Watch This!</h2>
          </Nav.Item>
        </Nav>
        <Form className="d-flex justify-content-end">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}
