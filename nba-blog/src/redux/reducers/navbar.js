import {
  OPEN_NAV,
  CLOSE_NAV,
  OPEN_SUB_MENU,
  CLOSE_SUB_MENU,
  OPEN_SIDE_BAR,
  CLOSE_SIDE_BAR,
} from "../constant/actionTypes";
// import sublinks from "../../data";
export default (
  state = { isOpen: false, isSubMenuOpen: false, isSideBarOpen: false },
  action
) => {
  switch (action.type) {
    case OPEN_NAV:
      return { ...state, isOpen: true };
    case CLOSE_NAV:
      return { ...state, isOpen: false };
    case OPEN_SIDE_BAR:
      return { ...state, isSideBarOpen: true };
    case CLOSE_SIDE_BAR:
      return { ...state, isSideBarOpen: false };
    case OPEN_SUB_MENU:
      return { ...state, isSubMenuOpen: true };
    case CLOSE_SUB_MENU:
      return { ...state, isSubMenuOpen: false };
    default:
      return state;
  }
};
