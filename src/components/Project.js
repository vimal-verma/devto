//  Code of /user Route


import React, { Component } from 'react'
import Footer from './Footer'
import Nav from './Nav'

export default class Project extends Component {
    componentDidMount(){
        document.title = `User | DevTo App 👨‍💻`
        const favicon = document.getElementById("favicon");
        favicon.href = `https://logo.letskhabar.com/name?name=U&bgc=yellow&col=Black`;
      }
    render() {
        return (
            <div>
                <Nav/>
                <div className="main">
                    <h1>Hello User</h1>
                </div>
                <Footer/>
            </div>
        )
    }
}
