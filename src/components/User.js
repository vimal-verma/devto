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
        document.title = `👨‍💻 ${this.props.name}'s Dev Profile 👨‍💻`
        const favicon = document.getElementById("favicon");
        favicon.href = `https://logo.letskhabar.com/name?name=${this.props.name}&bgc=yellow&col=Black`;
      }
      
    render() {
      if(!this.state.isLoaded){
        return <h2 className="high">User Information Loading........</h2>
    }
    else{
      if(this.state.persons.username){
        if(this.state.persons.type_of === 'organization'){
          var web = this.state.persons.url
          var icon = <i class="fas fa-building"></i>
        }else{
          web = this.state.persons.website_url
          icon = <i class="fas fa-user-circle"></i>
        }
        if(this.state.persons.github_username){}
        return (
          <div>
            <div className="user">
            <div className="userimg">
            <img src={this.state.persons.profile_image} alt="persion"/>
            <h1>{ this.state.persons.name}</h1>
            <p></p>
            </div>
            <div className="userinfo">
                <p> {icon} ({ this.state.persons.username}) is { this.state.persons.type_of}</p>
                <h4>Bio💖</h4>
                <h1 className="bio">{ this.state.persons.summary}</h1>
                <a target="blank" href={'https://github.com/'+ this.state.persons.github_username}><i class="fab fa-github"></i> @{this.state.persons.github_username}</a><br/><br/>
                <a target="blank" href={'https://twitter.com/'+ this.state.persons.twitter_username}><i class="fab fa-twitter"></i> @{this.state.persons.twitter_username}</a><br/><br/>
                <a target="blank" href={web}><i class="fas fa-globe"></i> {web}</a>
                <p><i class="fas fa-map-marker-alt"></i> { this.state.persons.location}</p>
                <p>joined at { this.state.persons.joined_at}</p>
                <a target="blank" href={'https://dev.to/'+ this.state.persons.username}><button className="submit">View Profile on Dev <i class="fab fa-dev"></i></button></a><br/>
                
            </div>
            </div>
            <hi>{this.state.persons.name}'s Article</hi>
            <Chart name={this.props.name}/>
          </div>
        )
      }else{
        return(
          <div>
            <h1 className="high">User Not Found</h1>
          </div>
        )
      }
    }
    }
}
