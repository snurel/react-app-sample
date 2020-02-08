import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import {fetchUsers} from "../actions";

class UsersComponent extends Component{

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { users, waiting, error } = this.props;

        if(error !== null){
            return (
                <Alert variant='danger'>
                    System failed while fetching users!
                </Alert>
            )
        }

        if(waiting){
            return (
                <div className='text-center pt-2'>
                    <Spinner animation="border" />
                </div>
            )
        }

        return (
            <div className="p-2">
                <h1>User List</h1>
                <div className='row p-2'>
                    { users.map((user, index)=>(
                        <Col sm={6} md={4} lg={3} xs={12} className="p-2 text-center" key={'user_'+ index }>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{user.name}</Card.Title>
                                    <Card.Text>
                                        {user.email}
                                    </Card.Text>
                                    <Button variant="light"><Link to={'/user/'+user.id}>{user.website}</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )) }
                </div>
            </div>
        );
    }
}

UsersComponent.propTypes = {
    users: PropTypes.array.isRequired
};

const mapStateToProps = ({ users }) => ({
    users: users.list,
    error: users.error,
    waiting: users.waiting
});

export default connect(mapStateToProps, { fetchUsers })(UsersComponent);
