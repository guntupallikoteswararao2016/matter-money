import React from 'react';
class Home extends React.Component {
    state = {
        users: []
    }
    
    componentDidMount() {
        console.log("res>>>home::profile");

    fetch('/profile')
        .then(res => {
        // console.log("res>>>home::profile",res);
        return res.json()
        })
        .then(users => {
        console.log(users);
        this.setState({ users })
        });
    }
    
    render() {

        return (
            <div>
             {   
                this.state.users.map(({id, firstname, surname }) => <div key={id}>
                    <span>{firstname} -{surname}-
                    <a href={`/profile/${id}`}>view profile</a>
                    </span>
                </div>)
            }
            </div>
        )
    }
}
export default Home;