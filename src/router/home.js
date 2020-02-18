import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Fetch from '../shared/services/fetch-service';
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
           <img src="/favicon-194x194.png" />
         {   
            users.map(({id, firstname, surname }) => <div key={id}>
                <span>{firstname} -{surname}-
                <Link to={`/profile/${id}`}>view profile</Link>
                </span>
            </div>)
        }
        </div>
    )
}
