import { Navbar, Form, FormControl, Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as uiActions from "../../store/actions/generalUiState";
import NavbarOffcanvas from "../NavbarOffcanvas/NavbarOffcanvas";
const Header = ({ isSidebarOpened, toggleSidebarMenu }) => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      onToggle={() => toggleSidebarMenu(!isSidebarOpened)}
    >
      <Container fluid>
        <Navbar.Toggle />

        <Navbar.Brand href="#">Watch This</Navbar.Brand>

        <Navbar.Offcanvas placement="start">
          <NavbarOffcanvas />
        </Navbar.Offcanvas>

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

const mapStateToProps = (state) => ({
  isSidebarOpened: state.generalUiState.isSidebarOpened,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebarMenu: (isSidebarOpened) =>
    dispatch(uiActions.toggleSidebarMenu(isSidebarOpened)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
