import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

class UserDetail extends Component{
    constructor(props) {
        super(props);

        console.log(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <h1>User Details</h1>
        )
    }
}

export default connect(null, {})(UserDetail);
