import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';


const UserInfo = () => {

    return (<span>
        Welcome userName:
       {
            console.log(">>>>***<M<<<<<<")
        }
    </span>)
}
const Header = (props) => (<div>
    Home | About Us | Register  | Contact| {<UserInfo />}
    <p>{JSON.stringify(props.todos, null, 2)}</p>
    <button onClick={() => props.toggleTodo('header')}>##GO</button>

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
)(Header)