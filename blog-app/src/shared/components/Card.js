import React from 'react';
import { CardGroup, Card, Nav } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const CardLook = props => {
    const pid = props.id;
    const history = useHistory();
    const navHandler = () =>{
        console.log(pid);
        history.push(`/posts/${pid}`);
        // window.location.reload(true);
    }
    return (
        <CardGroup style={{marginTop: 20, paddingRight: 25}} >
            <Card >
                <Card.Body>
                <Nav.Link onClick={navHandler} ><Card.Title>{props.title}</Card.Title></Nav.Link>
                <Card.Text  style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }} >{props.content}</Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">{props.date}</small>
                </Card.Footer>
            </Card>      
        </CardGroup>
    );
};

export default CardLook;