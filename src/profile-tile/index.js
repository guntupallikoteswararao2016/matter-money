import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

export default ({id, firstname, surname}) => {
    return (
        <div className="profile-tile">
          <div className="avator">
            <img src="../../assests/men.jpg" /></div>
            <div>
                <p>Id:{id}</p>
                <p>Name:{firstname}</p>
                <p>surname:{surname}</p>
                <Link to={`/profile/${id}`}>view complete profile</Link>                
            </div>
        </div>
    )
}