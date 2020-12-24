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
                    <h3>You Can Share your Profile as </h3>
                    <code>https://websense.tech/user/your_devto_username</code> 
                </div>
                <Footer/>
            </div>
        )
    }
}
