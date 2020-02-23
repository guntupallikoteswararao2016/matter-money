import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Fetch from '../shared/services/fetch-service';
import Profile from '../profile';
import './style.scss';

export default (props) => {

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

  }, [])

  return (
    <div className="profiles-container">
      <header>Profiles</header>
      <div className="profile-tiles">
        {
          users.map(item => <Profile key={item.id} {...item} />)
        }
      </div>
    </div>
  )
}
