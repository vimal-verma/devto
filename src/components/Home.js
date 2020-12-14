import React, { Component } from 'react'
import axios from 'axios'
import Chart from './Chart'
import Search from './Search'

class Home extends Component {
    state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(`https://dev.to/api/users/by_username?url=vimal`)
          .then(res => {
            const persons = res.data;
            console.log(persons)
            this.setState({ persons });
          })
      }
    render() {
        return (
            <div>
            <Search/>
                <h1>Home components</h1>
                <h1>{ this.state.persons.name}</h1>
                <h1>{ this.state.persons.username}</h1>
                <h1>{ this.state.persons.summary}</h1>
                <h1>{ this.state.persons.github_username}</h1>
                <h1>{ this.state.persons.twitter_username}</h1>
                <h1>{ this.state.persons.website_url}</h1>
                <h1>{ this.state.persons.location}</h1>
                <img src={this.state.persons.profile_image} alt="persion"/>
                <Chart/>
            </div>
        )
    }
}
export default Home;