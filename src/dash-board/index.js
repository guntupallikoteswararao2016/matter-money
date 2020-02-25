import React, { useState, useEffect } from 'react';
import Fetch from '../shared/services/fetch-service';
import Profile from '../profile';
import './style.scss';
import { connect } from 'react-redux';
import { addTodo } from './actions';

const DashBoard =  (props) => {

  const [users, updateUsers] = useState([]);

  useEffect(() => {

    const init = async () => {
      const datas = await Fetch('/login/posts', {
        headers: {
          'Authorization': `Bearar ${localStorage.getItem('auth')}`
        }
      });
      const family = await datas.json();

      updateUsers(family);
    }
    if (localStorage.getItem('auth')) {

      init();
      
    } else {
      
      props.history.push('/');

    }

  }, [props.history])

  return (
    <div className="profiles-container">
      <header>Profiles</header>
    <p>{JSON.stringify(props.profile, null, 2)}</p>
    <p>todos{JSON.stringify(props.header, null, 2)}</p>

      <button onClick={() => props.toggleTodo('adash')}>##GO</button>
      <div className="profile-tiles">
        {
          users.map(item => <Profile key={item.id} {...item} />)
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
    profile: state.profile.profiles,
    header: state.header.todos
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(addTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard)