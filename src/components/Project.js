//  Code of /user Route


import React, { Component } from 'react'
import Footer from './Footer'
import Nav from './Nav'

export default class Project extends Component {
    componentDidMount(){
        document.title = `Project | DevTo App 👨‍💻`
        const favicon = document.getElementById("favicon");
        favicon.href = `https://logo.letskhabar.com/name?name=P&bgc=yellow&col=Black`;
      }
    render() {
        return (
            <div>
                <Nav/>
                <h1 className="main">User</h1>
                <Footer/>
            </div>
        )
    }
}
