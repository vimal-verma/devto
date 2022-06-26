import React, { Component } from 'react'
import axios from 'axios'
import Chart from './Chart'
import Share from '../components/Share'
import ReactTooltip from 'react-tooltip'
import Orguser from './Orguser'

export default class User extends Component {
    state = {
        persons: [],
        isLoaded: false
      }
    
      componentDidMount() {
        axios.get(`https://dev.to/api/users/by_username?url=${this.props.name}`)
          .then(res => {
            const persons = res.data;
            // console.log(persons)
            this.setState({ persons, isLoaded :true });
          })
          if (!this.state.isLoaded) {
            axios.get(`https://dev.to/api/organizations/${this.props.name}`)
            .then(res => {
              const persons = res.data;
              // console.log(persons)
              this.setState({ persons, isLoaded :true });
            })            
            .catch(err =>{
              // console.log(err)
              this.setState({ isLoaded: true })
            })          
          }
        document.title = `👨‍💻 ${this.props.name}'s Dev Profile 👨‍💻`
        const favicon = document.getElementById("favicon");
        favicon.href = `https://logo.vdev.in/name?name=${this.props.name}&bgc=yellow&col=Black`;
      }
      
    render() {
      if(!this.state.isLoaded){
        return <div className="high">
          <h1>User Information Loading........</h1>
          <div className="loader"></div>
        </div>
    }
    else{
      if(this.state.persons.username){
        if(this.state.persons.type_of === 'organization'){
          var web = this.state.persons.url
          var icon = <i class="fas fa-building"></i>
          var pic = <img width="300px" src={this.state.persons.profile_image} alt="organization img"/>
          var showmember = <Orguser name={this.props.name}/>
          var isUser = false
        }else{
          web = this.state.persons.website_url
          icon = <i class="fas fa-user-circle"></i>
          pic = <img width="300px" src={this.state.persons.profile_image} alt="user img"/>
          showmember = ''
          isUser = true
        }
        if(this.state.persons.summary){
          var bio = <h1 className="bio">{ this.state.persons.summary}</h1>
        }else{
          bio = <h1 className="bio">404 bio not found </h1>
        }
        if(this.state.persons.github_username){
          var github = <div><a data-tip data-for='ugithub' target="blank" href={'https://github.com/'+ this.state.persons.github_username}><i class="fab fa-github"></i> @{this.state.persons.github_username}</a><br/><br/></div>
        }else{
          github = ''
        }
        if(this.state.persons.twitter_username){
          var twitter = <div><a data-tip data-for='utwitter' target="blank" href={'https://twitter.com/'+ this.state.persons.twitter_username}><i class="fab fa-twitter"></i> @{this.state.persons.twitter_username}</a><br/><br/></div>
        }else{
          twitter = ''
        }
        if(this.state.persons.location){
          var location = <p><i class="fas fa-map-marker-alt"></i> { this.state.persons.location}</p>
        }else{
          location = ''
        }
        if(web){
          var webs = <a data-tip data-for='uweb' target="blank" href={web}><i class="fas fa-globe"></i> {web}</a>
        }else{
          webs = ''
        }
        if(this.state.persons.github_username){}
        return (
          <div>
          <Share user={this.props.name}/>
            <div className="user">
            <div className="userimg">
            {pic}
            <h1>{ this.state.persons.name}</h1>
            <p></p>
            </div>
            <div className="userinfo">
                <p> {icon} ({ this.state.persons.username})</p>
                <h4>Bio💖</h4>
                {bio}
                {github}
                {twitter}
                {webs}
                {location}
                <p>joined at { this.state.persons.joined_at}</p>
                <a target="blank" href={'https://dev.to/'+ this.state.persons.username}><button className="submit">View Profile on Dev <i class="fab fa-dev"></i></button></a><br/>
                
            </div>
            </div>
            <hi>{this.state.persons.name}'s Article</hi>
            <Chart isUser={isUser} name={this.props.name}/>
            {showmember}
            <ReactTooltip place="right" id='utwitter' type='light'>
            <span>Twitter Account</span>
            </ReactTooltip>
            <ReactTooltip place="right" id='ugithub' type='light'>
            <span>Github Account</span>
            </ReactTooltip>
            <ReactTooltip place="right" id='uweb' type='light'>
            <span>Website</span>
            </ReactTooltip>
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
