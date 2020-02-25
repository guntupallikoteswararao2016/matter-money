import React, { useEffect } from 'react';
import Fetch from '../shared/services/fetch-service';

export default (props) => {

    useEffect(() => {
        console.log("Local store age",localStorage.getItem('login'));
        if(localStorage.getItem('login')){
            
            props.history.push('/dashboard');

        }

    }, [props.history]);

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
                    body: JSON.stringify({ id: textInput.current.value })
                });
                const loginResp = await datas.json();
                if (loginResp.isLogin) {
                    props.history.push('/dashboard');
                    localStorage.setItem("auth", loginResp.accessToken);
                    localStorage.setItem("login", loginResp.isLogin);
                } else {
                    props.history.push('/')

                }
                console.log("Login", loginResp);
            }
        }>Submit</button>
    </div>
}
