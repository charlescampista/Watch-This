import actionTypes from "../../actionTypes";

const INITIAL_STATE = {
  isSidebarOpened: false,
  currentPage: "",
};

export default function generalUiState(state = INITIAL_STATE, action) {
  console.log(action);
  if (action.type === actionTypes.TOGGLE_SIDEBAR_MENU) {
    return {
      ...state,
      isSidebarOpened: action.isSidebarOpened,
    };
  }

  if (action.type === actionTypes.SET_CURRENT_PAGE) {
    return {
      ...state,
      currentPage: action.currentPage,
    };
  }

  return state;
}
