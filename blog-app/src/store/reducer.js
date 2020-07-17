import { ADD_POST, DELETE_POST, EDIT_POST, FETCH_POST, FETCH_SINGLE, SIGNUP, LOGIN } from './action-types';
import Post from '../shared/model/post';
import User from '../shared/model/user';

const initialState = {
    users: [],
    posts: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST:
            state.posts = action.posts
        case FETCH_SINGLE:
            return {
                posts: action.posts
            }
        case ADD_POST:
            const newPost = new Post(
                action.post.title,
                action.post.content,
                action.post.date
            );
            return {
                ...state,
                posts: state.posts.concat(newPost)
            };
        case EDIT_POST: 
            const postIndex = state.posts.findIndex(
                p => p.id === action.postId
            );
            const editedPost = new Post(
                action.postId,
                //state.posts[postIndex].ownerId
                action.post.title,
                action.post.content,
                action.post.date
            );
            return {
                ...state,
                posts: editedPost
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(
                    p => p.id !== action.postId
                )
            };
        case SIGNUP:
            const newUser = new User(
                action.user.nickname,
                action.user.email,
                action.user.password
            );
            return {
                ...state,
                users: state.users.concat(newUser)
            };
        case LOGIN:
            console.log(action.users);
            state.users = action.users
    }
    return state; 
};

export default rootReducer;