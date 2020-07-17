import React, { useEffect, useState } from 'react';
import { Form, Button, Card, Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as actions from '../../store/actions';

const Login = () => {
    var loggingUser = {userEmail:"", userPassword:""};
    const dispatch = useDispatch();
    const users = useSelector(state => state.posts.users);
    const history = useHistory();
    useEffect(() => {
        const fetchData = async () =>{
            await dispatch(actions.login());
        }
        fetchData();
    }, [dispatch]);


    const changeEmailHandler = event => {
        loggingUser.userEmail = event.target.value;
    };

    const changePasswordHandler = event => {
        loggingUser.userPassword = event.target.value;
    };

    var allUsers;
    const buttonClickedHandler = async () => {
        for (const idx in users) {
            if (loggingUser.userEmail === users[idx].email && loggingUser.userPassword === users[idx].password) {
                history.push("/");
            } else {
                console.log("ERRRO");
            }
        };
    };

    return (
        <div >
        <Card style={{height: '100%', width: '100%' ,flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '15%'}} >
        <h2>LOGIN TO MY BLOG</h2>
        <br />
        <Form style={{width: '18rem'}}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={changeEmailHandler} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={changePasswordHandler}  />
            </Form.Group>
            <Button variant="dark"  onClick={buttonClickedHandler} >
                LOGIN
            </Button>
            <Nav.Link /* href="/authenticate/signup" */ >SWITCH TO SIGNUP</Nav.Link>
        </Form>
        </Card>
        </div>
    )
};

export default Login;