import React from "react";
import { connect } from "react-redux";
import { Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import * as uiActions from "../../store/actions/uiState";
const Sidebar = ({ isSidebarOpened, toggleSidebarMenu }) => {
  return (
    <aside>
      <Offcanvas
        show={isSidebarOpened}
        onHide={() => toggleSidebarMenu(!isSidebarOpened)}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
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
      </Offcanvas>
    </aside>
  );
};

const mapStateToProps = (state) => ({
  isSidebarOpened: state.uiState.isSidebarOpened,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebarMenu: (isSidebarOpened) =>
    dispatch(uiActions.toggleSidebarMenu(isSidebarOpened)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
