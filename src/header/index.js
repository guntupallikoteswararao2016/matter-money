import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import {Link} from 'react-router-dom';
import Avator from '../account'
import "./style.scss";

const Header = (props) => (<div>
    <ul>
        <li><Link to="/"> Home</Link></li>
        <li>About Us</li>
        <li><Link to="/register"> Register</Link></li>
        <li>Contact</li>
        <li>{<Avator />}</li>
    </ul>

</div>)


const mapStateToProps = state => ({
    todos: state.header.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(addTodo(id))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
