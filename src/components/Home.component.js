import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../App.css';
import { increment, decrement, logIn } from '../actions/index';
import {fetchUsers} from "../actions";
import Button from "react-bootstrap/Button";


class Home extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { title, increment, decrement, logIn, status, count } = this.props;
        return (
            <div className='text-center'>
                <h1>{title}</h1>
                <div className='row center'>
                    <button className='btn btn-light' onClick={decrement}> - </button>
                    {<p className='ml-2 mr-2'>Count: <span>{count}</span></p>}
                    <button className='btn btn-light'  onClick={increment}> + </button>
                </div>

                { status ? <h2>Welcome Home!</h2> : <Button variant='primary' onClick={logIn}>Log In</Button>}
            </div>
        );
    }
};

Home.propTypes= {
    title: PropTypes.string.isRequired
};

const mapStateToProps = ({ loginStatus, count, users }) => ({
   status: loginStatus,
   count,
   users
});

export default connect(mapStateToProps, { fetchUsers, increment, decrement, logIn })(Home);
