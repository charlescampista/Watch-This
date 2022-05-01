import actionTypes from "../actionTypes";

export function changeMoviesTab(selectedTab) {
  return {
    type: actionTypes.CHANGE_MOVIES_TAB,
    selectedTab,
  };
}
