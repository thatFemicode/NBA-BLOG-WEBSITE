import * as api from '../api/index';
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  FETCH_POST,
  START_LOADING,
  END_LOADING,
  COMMENT,
} from '../redux/constant/actionTypes';
// Now we have to create actions
// actiona cretors are functions that return actions
// The below is a function that returns another function
export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const getPost = (id) => async (dispatch) => {
  try {
    // DISPATCH START LOADING IMMEDIATELE WHEN WE GET POSTS
    // dispatch({ type: START_LOADING });
    // passed page
    const { data } = await api.fetchPost(id);
    console.log(data);
    dispatch({ type: FETCH_POST, payload: data });
    // dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
// This is for the search for both tags and norma search
// The get post by search will accept a searhcQuery and that will be sent to
// the database with out request
// export const getPostsBySearch = (searchQuery) => async (dispatch) => {
//   try {
//     // Making the request, we have to destructure the {data} becuase we
//     // are sending back something called data from the backend
//     const {
//       data: { data },
//     } = await api.fetchPostsBySearch(searchQuery);
//     console.log(data);
//     dispatch({ type: FETCH_BY_SEARCH, payload: data });
//     // dispatch({ type: FETCH_ALL, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch {}
};
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    // console.log(data);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    console.log(data);
    dispatch({ type: LIKE, payload: data });
  } catch {}
};
export const commentPost = (value, id) => async (dispatch) => {
  // value and id are coming from the commentsection dispatch
  try {
    const { data } = await api.comment(value, id);
    console.log(data);
    dispatch({ type: COMMENT, payload: data });
    // After we dispatch this action, we also have to return the newswt comment coming in
    return data.comments;
  } catch (error) {
    console.log(error);
  }
};
// payload is usually the data where we store all of our post
