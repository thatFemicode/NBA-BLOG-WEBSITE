import {
  CLOSE_NAV,
  OPEN_NAV,
  OPEN_SUB_MENU,
  CLOSE_SUB_MENU,
  OPEN_SIDE_BAR,
  CLOSE_SIDE_BAR,
} from "../constant/actionTypes";

export const openNavbar = () => {
  return { type: OPEN_NAV };
};
export const closeNavbar = () => {
  return { type: CLOSE_NAV };
};
export const OpenSideBar = () => {
  return { type: OPEN_SIDE_BAR };
};
export const closeSideBar = () => {
  return { type: CLOSE_SIDE_BAR };
};
export const openSubMenu = () => {
  return {
    type: OPEN_SUB_MENU,
  };
};
export const closeSubMenu = () => {
  return {
    type: CLOSE_SUB_MENU,
  };
};
