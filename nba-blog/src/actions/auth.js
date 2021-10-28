import * as api from '../api/index';
import { AUTH } from '../redux/constant/actionTypes';
export const signin = (formData, history) => async (dispatch) => {
  try {
    // Login the user
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    // We have the history to push to the home page
    history.push('/blog');
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData, history) => async (dispatch) => {
  try {
    // Login the user
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    // We have the history to push to the home page
    history.push('/blog');
  } catch (error) {
    console.log(error);
  }
};
