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
                <div className="main">
                    <h1>About page</h1>
                    <h4> </h4>
                </div>
            <Footer/>
            </div>
        )
    }
}
