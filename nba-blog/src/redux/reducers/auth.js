import { AUTH, LOGOUT } from '../constant/actionTypes';
const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      // We need to store the data in Local storage after logging in
      localStorage.setItem('profi', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action?.data };
    case LOGOUT:
      // We need to store the data in Local storage after logging in
      localStorage.clear();

      return { ...state, authData: null };
    default:
      return state;
  }
};
export default authReducer;
