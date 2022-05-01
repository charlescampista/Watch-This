import actionTypes from "../actionTypes";

export function toggleSidebarMenu(isSidebarOpened) {
  return {
    type: actionTypes.TOGGLE_SIDEBAR_MENU,
    isSidebarOpened,
  };
}
