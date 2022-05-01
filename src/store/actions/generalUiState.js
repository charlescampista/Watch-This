import actionTypes from "../actionTypes";

export function toggleSidebarMenu(isSidebarOpened) {
  return {
    type: actionTypes.TOGGLE_SIDEBAR_MENU,
    isSidebarOpened,
  };
}

export function setCurrentPage(currentPage) {
  return {
    type: actionTypes.SET_CURRENT_PAGE,
    currentPage,
  };
}
