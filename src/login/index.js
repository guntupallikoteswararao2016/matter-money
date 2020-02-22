import React from 'react';
import {Redirect} from 'react-router-dom';
import Fetch from '../shared/services/fetch-service';

export default () => {
    let textInput = React.createRef();
    return <div>Login Details

    <input type="text" ref={textInput} />
        <button onClick={
            async () => {
                let datas = await Fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({id:textInput.current.value}) 
                });
                const loginResp = await datas.json();
                debugger;
                if(loginResp.isLogin){
                     <Redirect  to="/profile/:id" />
                }
                console.log("Login",loginResp.isLogin);
            }
        }>Submit</button>
    </div>
}
