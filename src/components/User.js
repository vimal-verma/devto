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
          if (!this.state.isLoaded) {
            axios.get(`https://dev.to/api/organizations/${this.props.name}`)
            .then(res => {
              const persons = res.data;
              console.log(persons)
              this.setState({ persons, isLoaded :true });
            })            
          }
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
        if(this.state.persons.type_of === 'organization'){
          var web = this.state.persons.url
        }else{
          web = this.state.persons.website_url
        }
        return (
          <div>
            <div className="user">
            <div className="userimg">
            <img src={this.state.persons.profile_image} alt="persion"/>
            <h1>{ this.state.persons.name}</h1>
            <p>({ this.state.persons.username})</p>
            </div>
            <div className="userinfo">
                <p>type_of { this.state.persons.type_of}</p>
                <h4>Bio💖</h4>
                <h3 className="bio">{ this.state.persons.summary}</h3>
                <a href={'https://github.com/'+ this.state.persons.github_username}>Github {this.state.persons.github_username}</a><br/>
                <a href={'https://twitter.com/'+ this.state.persons.twitter_username}>twitter {this.state.persons.twitter_username}</a><br/>
                <a href={web}>website {web}</a>
                <p>location { this.state.persons.location}</p>
                <p>joined at { this.state.persons.joined_at}</p>
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
