import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Fetch from '../shared/services/fetch-service';
import Profile  from '../profile'
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
        <div>
          <header>Profiles</header>

           {
             users.map(item=><Profile  {...item}/>)
           }
        </div>
    )
}
