import React, { useEffect } from 'react';
import { Form, Button, Card, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as actions from '../../store/actions';

const Signup = props => {
    var newUser = {userNickName:"", userEmail:"", userPassword:""};
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(async () => {
    }, [dispatch]);

    const changeNickNameHandler = event => {
        newUser.userNickName = event.target.value;
    };

    const changeEmailHandler = event => {
        newUser.userEmail = event.target.value;
    };

    const changePasswordHandler = event => {
        newUser.userPassword = event.target.value;
    };

    const buttonClickedHandler = () => {
        dispatch(actions.signup(newUser.userNickName, newUser.userEmail, newUser.userPassword))
        history.push("/authenticate/login");
        setTimeout(function () {
            window.location.reload(true);
        }, 500);
    };

    return (
        <div >
        <Card style={{height: '100%', width: '100%' ,flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '12%'}} >
        <h2>SIGN UP TO MY BLOG</h2>
        <br />
        <Form style={{width: '18rem'}}>
            <Form.Group controlId="formBasicNickname">
                <Form.Label>Nickname</Form.Label>
                <Form.Control type="Nickname" placeholder="Nickname" onChange={changeNickNameHandler} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={changeEmailHandler} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={changePasswordHandler} />
            </Form.Group>
            <Button variant="dark" type="submit" onClick={buttonClickedHandler} >
                SIGN UP
            </Button>
            <Nav.Link href="/authenticate/login" >SWITCH TO LOGIN</Nav.Link>
        </Form>
        </Card>
        </div>
    )
};

export default Signup;