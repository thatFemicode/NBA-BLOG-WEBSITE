import { combineReducers } from 'redux';
import navbar from './navbar';
import posts from './posts';
const reducers = combineReducers({ navbar: navbar, posts: posts });

export default reducers;
