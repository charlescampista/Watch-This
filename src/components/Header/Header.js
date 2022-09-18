import { Navbar, Form, FormControl, Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as generalUiActions from "../../store/actions/generalUiState";
import * as generalInformationActions from "../../store/actions/generalInformationState";
import NavbarOffcanvas from "../NavbarOffcanvas/NavbarOffcanvas";
const Header = ({ isSidebarOpened, toggleSidebarMenu, setLanguage }) => {
  return (
    <Navbar
      //bg="dark"
      style={{ backgroundColor: "#000" }}
      expand="lg"
      onToggle={() => toggleSidebarMenu(!isSidebarOpened)}
    >
      <Container fluid>
        <Navbar.Toggle />

        <Navbar.Brand href="#">Watch This</Navbar.Brand>

        <Navbar.Offcanvas placement="start">
          <NavbarOffcanvas />
        </Navbar.Offcanvas>

        <Form.Select
          size="sm"
          className="m-2"
          style={{ width: "300px" }}
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
        >
          <option value="pt-BR">Português 🇧🇷</option>
          <option value="es">Español 🇪🇸</option>
          <option value="en-US">English 🇺🇸</option>
        </Form.Select>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  isSidebarOpened: state.generalUiState.isSidebarOpened,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebarMenu: (isSidebarOpened) =>
    dispatch(generalUiActions.toggleSidebarMenu(isSidebarOpened)),
  setLanguage: (language) =>
    dispatch(generalInformationActions.setLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
