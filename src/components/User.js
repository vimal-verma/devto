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
                <h1>name { this.state.persons.name}</h1>
                <h1>username { this.state.persons.username}</h1>
                <h1>ho { this.state.persons.summary}</h1>
                <h1>ho { this.state.persons.github_username}</h1>
                <h1>ho { this.state.persons.twitter_username}</h1>
                <h1>ho { this.state.persons.website_url}</h1>
                <h1>ho { this.state.persons.location}</h1>
                <img src={this.state.persons.profile_image} alt="persion"/>
                <Chart name={this.props.name}/>
            </div>
        )
    }
}
