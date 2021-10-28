import { combineReducers } from 'redux';
import navbar from './navbar';
import posts from './posts';
import auth from './auth';
const reducers = combineReducers({ navbar: navbar, posts: posts, auth: auth });

export default reducers;
