import React, { Component } from 'react'
import Footer from './Footer'
import Nav from './Nav'

export default class About extends Component {
    componentDidMount(){
        document.title = `About | DevTo App 👨‍💻`
        const favicon = document.getElementById("favicon");
        favicon.href = `https://logo.letskhabar.com/name?name=A&bgc=yellow&col=Black`;
      }
    render() {
        return (
            <div>
            <Nav/>
                <h1 className="main">About page</h1>
            <Footer/>
            </div>
        )
    }
}
