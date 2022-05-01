import {
  Navbar,
  Form,
  FormControl,
  Offcanvas,
  Container,
  Button,
  Nav,
} from "react-bootstrap";
import { connect } from "react-redux";
import * as uiActions from "../../store/actions/uiState";
import NavbarOffcanvas from "../NavbarOffcanvas/NavbarOffcanvas";
const Header = ({ isSidebarOpened, toggleSidebarMenu }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"lg"}`} />
        <Button
          onClick={() => {
            toggleSidebarMenu(!isSidebarOpened);
          }}
        >
          Toggle
        </Button>
        <Navbar.Brand href="#">Watch This</Navbar.Brand>

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${"lg"}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
          placement="start"
        >
          <NavbarOffcanvas />
        </Navbar.Offcanvas>

        {/* <Form className="d-flex justify-content-end">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  isSidebarOpened: state.uiState.isSidebarOpened,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebarMenu: (isSidebarOpened) =>
    dispatch(uiActions.toggleSidebarMenu(isSidebarOpened)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
