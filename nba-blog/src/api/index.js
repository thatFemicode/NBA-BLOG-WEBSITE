import axios from 'axios';

// const url = 'http://localhost:5000/posts';
const API = axios.create({
  baseURL: 'http://localhost:5000',
});
API.interceptors.request.use((req) => {
  // We re simply connecting this to the backed to send the user
  // token to the auth (middleware) backend
  if (localStorage.getItem('profi')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profi')).token
    }`;
  }

  // For interceptors we have to return request so it can move to the other middle
  // requests
  return req;
  // With this our Backend will be able to get a specific header
});
// All actions towrd backend are going to be done with redux
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = () => API.get('/posts');
// export const fetchPostsBySearch = (searchQuery) =>
//   API.get(
//     `/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${
//       searchQuery.tags
//     }`
//   );
// On bigger applications redux will be great for scalability
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`posts/${id}`, deletePost);
export const likePost = (id) => API.patch(`posts/${id}/likePost`);
export const comment = (value, id) =>
  API.post(`/posts/${id}/comment`, { value });

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
