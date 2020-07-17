import React from  'react';
import { Navbar, Nav } from 'react-bootstrap';


const navbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">My Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">All Posts</Nav.Link>
            <Nav.Link href="/u1/posts">My Posts</Nav.Link>
            <Nav.Link href="/posts/new">Add Post</Nav.Link>
            <Nav.Link href="/authenticate/login">Authenticate</Nav.Link>
            </Nav>
        </Navbar.Collapse>
</Navbar>
    );
};

export default navbar;