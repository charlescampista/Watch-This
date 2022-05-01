import React from "react";
import { Offcanvas, Nav } from "react-bootstrap";
import { connect } from "react-redux";

import * as generalUiStateActions from "../../store/actions/generalUiState";

const NavbarOffcanvas = ({ setCurrentPage, currentPage }) => {
  return (
    <>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setCurrentPage("movies");
              window.location.href = "/movies";
            }}
          >
            Movies
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setCurrentPage("tv");
              window.location.href = "/tv";
            }}
          >
            TV
          </Nav.Link>
        </Nav.Item>
      </Offcanvas.Body>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentPage: state.generalUiState.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentPage: (currentPage) =>
    dispatch(generalUiStateActions.setCurrentPage(currentPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarOffcanvas);
