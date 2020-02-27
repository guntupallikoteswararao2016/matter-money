import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

const Avator =  (props)=>{

    return(
        <div>
            {props.islogged && <div>Account: LogOut</div>}
        </div>
    )
}



const mapStateToProps = state => {
debugger;
    return ({
        islogged: state.account.avator.isloggedin
    })
}

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(addTodo(id))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Avator);