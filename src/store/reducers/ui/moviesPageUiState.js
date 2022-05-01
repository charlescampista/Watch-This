import actionTypes from "../../actionTypes";

const INITIAL_STATE = {
  selectedTab: "tab-popular",
};

export default function moviesPageUiState(state = INITIAL_STATE, action) {
  if (action.type === actionTypes.CHANGE_MOVIES_TAB) {
    return {
      ...state,
      selectedTab: action.selectedTab,
    };
  }
  return state;
}
