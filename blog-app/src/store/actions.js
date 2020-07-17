import moment from 'moment';
import uuid from 'react-uuid'

import Post from '../shared/model/post';
import User from '../shared/model/user';
import { ADD_POST, FETCH_POST, DELETE_POST, EDIT_POST, SIGNUP, LOGIN } from './action-types';

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(
                'https://blog-800b2.firebaseio.com/posts.json'
            );

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            const resData = await response.json();
            const loadedPosts = [];

            for (const key in resData) {
                loadedPosts.push(
                    new Post(
                        key,
                        resData[key].title,
                        resData[key].content,
                        resData[key].date
                    )
                );
            }
            dispatch({
                type: FETCH_POST,
                posts: loadedPosts
            });
        } catch (err) {
            throw err
        }
    };
};

export const fetchSingle = postId => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(
                `https://blog-800b2.firebaseio.com/posts/${postId}.json`
            );

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            const resData = await response.json();
            let newPost;
            newPost = new Post(
                postId,
                resData.title,
                resData.content,
                resData.date
            );
            return newPost;
        } catch (err) {
            throw err
        }
    };
};

export const deletePost = postId => {
    return async (dispatch, getState) => {
        const response = await fetch(
            `https://blog-800b2.firebaseio.com/posts/${postId}.json`,
            {
                method: 'DELETE'
            }
        );

        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        dispatch({
            type: DELETE_POST,
            postId: postId
        });
    };
};

export const addPost = (title, content, date) => {
    let id = uuid();
    return async (dispatch, getState) => {
        //const userId = getState().userId;

        const response = await fetch(
            `https://blog-800b2.firebaseio.com/posts.json`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id,
                    title,
                    content,
                    date: moment().format("DD-MM-YYYY").toString()
                    //ownerId: userId
                })
            }
        );
        const resData = await response.json();
        console.log(resData);

        //const resData = await response.json();

        dispatch({
            type: ADD_POST,
            post : {
                id,
                title,
                content,
                date
                //ownerId: userId
            }
        });
    };
};

export const editPost = (id, title, content, date) => {
    return async (dispatch, getState) => {
        const response = await fetch(
            `https://blog-800b2.firebaseio.com/posts/${id}.json`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    content,
                    date: moment().format("DD-MM-YYYY").toString()
                })
            }
        );

        if(!response.ok) {
            throw new Error('Something went wrong!');
        }

        dispatch({
            type: EDIT_POST,
            postId: id,
            post: {
                title,
                content,
                date
            }
        });
    };
};

export const signup = (nickname, email, password) => {
    let id = uuid();
    return async (dispatch, getState) => {
        const response = await fetch(
            `https://blog-800b2.firebaseio.com/users.json`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id,
                    nickname,
                    email,
                    password
                })
            }
        );
        const resData = await response.json();

        dispatch({
            type: SIGNUP,
            user : {
                id,
                nickname,
                email,
                password
            }
        });
    };
};

export const login = () => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(
                'https://blog-800b2.firebaseio.com/users.json'
            );

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            const resData = await response.json();
            const loadedUsers = [];

            for (const key in resData) {
                loadedUsers.push(
                    new User(
                        key,
                        resData[key].nickname,
                        resData[key].email,
                        resData[key].password
                    )
                );
            }
            dispatch({
                type: LOGIN,
                users: loadedUsers
            });
        } catch (err) {
            throw err
        }
    };
};