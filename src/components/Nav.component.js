import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavComponent extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        )
    }
}
