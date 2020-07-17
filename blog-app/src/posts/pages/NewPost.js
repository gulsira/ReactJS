import React, { useEffect } from 'react';
import { FormControl, Button, InputGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as actions from '../../store/actions';

const NewPost = props => {
    var newPost = {postTitle:"",postContent:""};
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(async () => {
    }, [dispatch]);

    const changeTitleHandler = event => {
        newPost.postTitle = event.target.value;
    }

    const changePostContentHandler = event => {
        newPost.postContent = event.target.value;
    }

    const buttonClickHandler = () => {
        dispatch(actions.addPost(newPost.postTitle, newPost.postContent,Date.now()))
        history.push("/");
        setTimeout(function() {
            window.location.reload(true);
        }, 500);
    };

    return (
        <div style={{padding: 45, flex: 1}} >
            <h1 style={{marginBottom: 30}} >Add New Post</h1>
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            placeholder="Title"
            aria-describedby="basic-addon1"
            onChange={changeTitleHandler}
            />
            </InputGroup>
            <InputGroup size="lg" style={{height: 300}} >
                <InputGroup.Prepend>
                    <InputGroup.Text>Post Content</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" onChange={changePostContentHandler} />
                <Button variant="dark" type="submit" onClick={buttonClickHandler} >SUBMIT POST</Button>
            </InputGroup>

        </div>
    );
};

export default NewPost;