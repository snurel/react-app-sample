import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

class Users extends Component{
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
            <div className='row'>
                { users.map((user, index)=>(
                    <Col sm={6} md={4} lg={3} xs={12} className="p-2 text-center" key={'user_'+ index }>
                        <Card>
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Text>
                                    {user.email}
                                </Card.Text>
                                <Button variant="light">{user.website}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )) }
            </div>
        );
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired
};

const mapStateToProps = ({ users }) => ({
    users: users.list,
    error: users.error,
    waiting: users.waiting
});

export default connect(mapStateToProps, {})(Users);
