import axios from 'axios';

const url = 'http://localhost:5000/posts';

// All actions towrd backend are going to be done with redux
export const fetchPosts = () => axios.get(url);

// On bigger applications redux will be great for scalability
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`, deletePost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
