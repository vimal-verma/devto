import React, { Component } from 'react'
import axios from 'axios'


export default class Follower extends Component {
    state={
        Followers : [],
        isLoaded : false
    }
    componentDidMount() {
        var config = {
            method: 'get',
            url: 'https://cors-anywhere.herokuapp.com/https://dev.to/api/followers/users?per_page=1000',
            headers: { 
                'api-key': this.props.apikey
            }
            };
        
        axios(config)
            .then(res => {
              const Followers = res.data;
              console.log(Followers)
              this.setState({ Followers, isLoaded :true });
            })
    }
    render() {
        if(!this.state.isLoaded){
            return <h2 className="high">Followers Information Loading........</h2>
        }
        else{
        return (
            <div>
                <h1>Followers Information</h1>
            <div className="devusers">
                {this.state.Followers.map(fuser =>{
                    return <div className="devuser">
                    <img width="100px" src={fuser.profile_image} alt="user img"/>
                    <h1>{fuser.name}</h1>
                    <a className="submit" href={'https://dev.to'+ fuser.path}>see</a>
                    </div>
                })}
            </div>
            </div>
        )
    }
}
}
