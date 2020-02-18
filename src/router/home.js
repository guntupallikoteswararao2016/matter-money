import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Fetch from '../shared/services/fetch-service';
import Profile  from '../profile';
import './style.scss';

export default () => {
  
    const [users, updateUsers] = useState([]);
  
    useEffect(() => {
  
      const init = async () => {
        const datas = await Fetch('profile');
        const family = await datas.json();
  
        updateUsers( family);
      }

      init();

    }, [])

    return (
        <div className="profiles-container">
          <header>Profiles</header>
          <div className="profile-tiles">
            {
              users.map(item=><Profile  {...item}/>)
            }
           </div>
        </div>
    )
}
