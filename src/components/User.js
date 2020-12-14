import React, { Component } from 'react'
import axios from 'axios'
import Chart from './Chart'

export default class User extends Component {
    state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(`https://dev.to/api/users/by_username?url=${this.props.name}`)
          .then(res => {
            const persons = res.data;
            console.log(persons)
            this.setState({ persons });
          })
      }
    render() {
        return (
            <div>
                <h1>Home components</h1>
                <h1>name = { this.state.persons.name}</h1>
                <p>username = { this.state.persons.username}</p>
                <h5>Bio { this.state.persons.summary}</h5>
                <p>github links = https://github.com/{ this.state.persons.github_username}</p>
                <p>twitter links = https://twitter.com/{ this.state.persons.twitter_username}</p>
                <p>website { this.state.persons.website_url}</p>
                <p>location { this.state.persons.location}</p>
                <img src={this.state.persons.profile_image} alt="persion"/>
                <Chart name={this.props.name}/>
            </div>
        )
    }
}
