import React, { Component } from 'react'
import axios from 'axios'


export default class Orguser extends Component {
    state={
        users : [],
        isLoaded : false
    }
    componentDidMount() {
        axios.get(`https://dev.to/api/organizations/${this.props.name}/users?per_page=1000`)
            .then(res => {
              const Followers = res.data;
              console.log(Followers)
              this.setState({ Followers, isLoaded :true });
            })
    }
    render() {
        if(!this.state.isLoaded){
            return <h2 className="high">organizations Users Information Loading........</h2>
        }
        else{
        return (
            <div>
                <h1>organizations Member Information</h1>
            <div className="devusers">
                {this.state.Followers.map(ouser =>{
                    return <div className="devuser">
                    <img width="100px" src={ouser.profile_image} alt="user img"/>
                    <h1>{ouser.name}</h1>
                    <a className="submit" href={'https://dev.to/'+ ouser.username}>see</a>
                    </div>
                })}
            </div>
            </div>
        )
    }
}
}
