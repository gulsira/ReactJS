import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FormControl, Button, InputGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/actions';

const EditPost = props => {
    const [title, Title] = useState(null);
    const [content, Content] = useState(null);
    const [date, contentDate] = useState(null);
    const postId = useParams().postId;
    var editedPost = {postTitle:"",postContent:""};
    const history = useHistory();
    const dispatch = useDispatch();
    var fetchedPost;

    useEffect(() => {
        async function fetchData(){
            fetchedPost = await dispatch(actions.fetchSingle(postId));
            Title(fetchedPost.title);
            Content(fetchedPost.content);
            contentDate(fetchedPost.date);
        }
        fetchData();
    }, []); 

    const changeTitleHandler = event => {
        editedPost.postTitle = event.target.value;
    }

    const changePostContentHandler = event => {
        editedPost.postContent = event.target.value;
    }

    const buttonClickHandler = () => {
        dispatch(actions.editPost(postId, editedPost.postTitle ? editedPost.postTitle : title, editedPost.postContent ? editedPost.postContent : content ,Date.now()))
        history.push("/");
        setTimeout(function() {
            window.location.reload(true);
        }, 500);
    }



    return (
        <div style={{padding: 45, flex: 1}} >
            <h1 style={{marginBottom: 30}} >Edit {title} Post</h1>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    defaultValue={title}
                    aria-describedby="basic-addon1"
                    onChange={changeTitleHandler}
                />
            </InputGroup>
            <InputGroup size="lg" style={{height: 300}} >
                <InputGroup.Prepend>
                    <InputGroup.Text>Post Content</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                    defaultValue={content} 
                    as="textarea" 
                    onChange={changePostContentHandler}
                />
                <Button 
                    variant="dark" 
                    type="submit" 
                    onClick={buttonClickHandler} 
                >
                SAVE CHANGES
                </Button>
            </InputGroup>

        </div>
    );
};

export default EditPost;