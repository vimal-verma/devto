import React, { Component } from 'react'
import User from './User'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          usern: '',
          isSubmitted: false
        };
      }
    SeeUser = (username) => {
        console.log('this is:', this);
        this.setState({
            isSubmitted: true,
            usern : username
        })
    }

    user= [
        {
            name : "The DEV Team",
            user : "devteam"
        },
        {
            name : "DigitalOcean",
            user : "DigitalOcean"
        },
        {
            name : "Microsoft Azure",
            user : "Azure"
        },
        {
            name : "daily.dev",
            user : "dailydotdev"
        },
        {
            name : "web",
            user : "web"
        },
        {
            name : "heroku",
            user : "heroku"
        },
        {
            name : "aws",
            user : "aws"
        },
        {
            name : "Netlify",
            user : "netlify"
        },
        {
            name : "Twilio",
            user : "Twilio"
        },
        {
            name : "Ben Halpern",
            user : "ben"
        },
        {
            name : "Cassidy Williams",
            user : "cassidoo"
        },
        {
            name : "Jess Lee",
            user : "jess"
        },
        {
            name : "Gift Egwuenu",
            user : "lauragift21"
        },
        {
            name : "Sophia Brandt",
            user : "sophiabrandt"
        },
        {
            name : "Niall Maher",
            user : "nialljoemaher"
        },
        {
            name : "Techworld with Nana",
            user : "techworld_with_nana"
        },
        {
            name : "Nick Scialli",
            user : "nas5w"
        },
        {
            name : "Bob.js",
            user : "rfornal"
        },
        {
            name : "Phil Nash",
            user : "philnash"
        },
        {
            name : "Bhupesh Varshney",
            user : "bhupesh"
        },
        {
            name : "Dhilip kumar",
            user : "dhilipkmr"
        },
        {
            name : "Vimal Kumar",
            user : "Vimal"
        }
    ]
    render() {
        console.log(this.state.usern)
        if(this.state.isSubmitted){
            return <div>
                <User name={this.state.usern.toLowerCase()}/>
            </div>
        }else{
        return (
            <div className="main">
                <h5>Search your dev username and submit to see your informsation</h5>
                <h5>Try to Search Vimal,Ben,web,Devteam and Click on Submit</h5>
                <h1>Some Top DevTo Account</h1>
                <div className="devusers">
                {this.user.map(us => {
                    return <div className="devuser">
                    <h1>{us.name}</h1>
                    <button className="submit" onClick={() => this.SeeUser(us.user)}>see</button>
                    </div>
                })}
                </div>
            </div>
        )
    }}
}
