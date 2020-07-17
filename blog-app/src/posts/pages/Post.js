import React, { useEffect,useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';

import * as actions from '../../store/actions';
const Post = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    const history = useHistory();
    const postId = useParams().postId;

    var currentPost = {};
    const setCurrentPost = () => {
        posts.posts.forEach(element => {
            if(element.id == postId){
                currentPost.title = element.title;
                currentPost.content = element.content;
                currentPost.date = element.date;
            }
        });
    }
    setCurrentPost();

    const deletePostHandler = async () => {
        await dispatch(actions.deletePost(postId));
        history.push("/");
    }

    const clickedHandler = () => {
        history.push(`/posts/edit/${postId}`)
    }

    return (
        <div>
        <h2 style={{marginTop:70, paddingLeft: 30}} >{currentPost.title}</h2>
        <hr/>
        <br/>
        <h4 style={{padding: 25}} >{currentPost.content}</h4>
        <br/>
        <p style={{padding: 25}} >{currentPost.date}</p>
        <Button variant="dark" size="lg" style={{marginLeft: 40}} onClick={clickedHandler} >EDIT</Button>{' '}
        <Button variant="dark" size="lg" onClick={deletePostHandler}  >DELETE </Button>{' '}
        </div>
    );
};


export default Post;




















/*import { useParams } from 'react-router-dom';

import { DUMMY_POSTS_DATA }  from '../../shared/dummy-data';
import PostsList from '../../shared/components/PostsList';

const Post = props => {
    const postId = useParams().postId;
    const loadedPost = DUMMY_POSTS_DATA.filter(p => p.id === postId);
    return (
        <PostsList items={loadedPost} />
    );
};

export default Post;*/