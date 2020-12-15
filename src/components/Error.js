import React, { Component } from 'react'
import Footer from './Footer'
import Nav from './Nav'

export default class Error extends Component {
    componentDidMount(){
        document.title = `👨‍💻Error 404 👨‍💻`
        const favicon = document.getElementById("favicon");
        favicon.href = `https://logo.letskhabar.com/name?name=D&bgc=yellow&col=Black`;
      }
    render() {
        return (
            <div>
                <Nav/>
                <h1 className="main">Error page</h1>
                <Footer/>
            </div>
        )
    }
}
