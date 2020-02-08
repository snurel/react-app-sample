import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../App.css';


class NavComponent extends Component {
    render() {

        const navClass= 'nav-link';
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand><Link to="/" className={navClass}>APPO</Link></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/" className={navClass}>Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/users" className={navClass}>Users</Link>
                    </Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

const mapStateToProps = ({ users }) =>({
    users
});

export default connect(mapStateToProps, {})(NavComponent);
