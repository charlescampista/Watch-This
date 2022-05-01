import actionTypes from "../actionTypes";

const INITIAL_STATE = {
  isSidebarOpened: false,
};

export default function uiState(state = INITIAL_STATE, action) {
  if (action.type === actionTypes.TOGGLE_SIDEBAR_MENU) {
    return {
      ...state,
      isSidebarOpened: action.isSidebarOpened,
    };
  }
  return state;
}
