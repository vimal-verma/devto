import React, { Component } from 'react'
import axios from 'axios'
import Chart from './Chart'

export default class User extends Component {
    state = {
        persons: [],
        isLoaded: false
      }
    
      componentDidMount() {
        axios.get(`https://dev.to/api/users/by_username?url=${this.props.name}`)
          .then(res => {
            const persons = res.data;
            console.log(persons)
            this.setState({ persons, isLoaded :true });
          })
          setTimeout(
            () => this.setState({ isLoaded: true }), 
            3000
          );
      }
      
    render() {
      if(!this.state.isLoaded){
        return <h2>Blog Post is Loading........</h2>
    }
    else{
      if(this.state.persons.username){
        return (
          <div>
            <div className="user">
            <div className="userimg">
            <img src={this.state.persons.profile_image} alt="persion"/>
            <h1>{ this.state.persons.name}</h1>
            <p>({ this.state.persons.username})</p>
            </div>
            <div className="userinfo">
                <h4>Bio💖</h4>
                <h3>{ this.state.persons.summary}</h3>
                <p>github links = https://github.com/{ this.state.persons.github_username}</p>
                <p>twitter links = https://twitter.com/{ this.state.persons.twitter_username}</p>
                <p>website { this.state.persons.website_url}</p>
                <p>location { this.state.persons.location}</p>
                <a href='https://github.com/vimalverma558/Master-Portfolio'>Master-Portfolio</a>
            </div>
            </div>
            <Chart name={this.props.name}/>
          </div>
        )
      }else{
        return(
          <div>
            <h1>User Not Found</h1>
          </div>
        )
      }
    }
    }
}
