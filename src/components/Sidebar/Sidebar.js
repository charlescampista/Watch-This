import React from "react";
import { connect } from "react-redux";
import { Offcanvas, Button } from "react-bootstrap";

import * as uiActions from "../../store/actions/uiState";
const Sidebar = (props) => {
  console.log(props);

  return (
    <nav>
      <Offcanvas show={props.uiState.isSidebarOpened}>
        <Button
          onClick={() =>
            props.toggleSidebarMenu(!props.uiState.isSidebarOpened)
          }
        >
          Close
        </Button>
      </Offcanvas>
    </nav>
  );
};

export default connect(
  (state) => state,
  (dispatch) => ({
    toggleSidebarMenu: (arg) => {
      dispatch(uiActions.toggleSidebarMenu(arg));
    },
  })
)(Sidebar);
