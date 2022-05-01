import {
  Navbar,
  Form,
  FormControl,
  Container,
  Button,
  Nav,
} from "react-bootstrap";
import { connect } from "react-redux";
import * as uiActions from "../../store/actions/uiState";
const Header = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav>
          <Nav.Item>
            <Button
              onClick={() => {
                props.toggleSidebarMenu(!props.uiState.isSidebarOpened);
              }}
            >
              Toggle
            </Button>
          </Nav.Item>

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
};

export default connect(
  (state) => state,
  (dispatch) => ({
    toggleSidebarMenu: (arg) => dispatch(uiActions.toggleSidebarMenu(arg)),
  })
)(Header);
