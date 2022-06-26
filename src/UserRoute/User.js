//  Code of /user Route


import React, { Component } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default class Project extends Component {
    componentDidMount() {
        document.title = `User | DevTo App 👨‍💻`
        const favicon = document.getElementById("favicon");
        favicon.href = `https://logo.vdev.in/name?name=U&bgc=yellow&col=Black`;
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="main">
                    <h3>You Can Share your Profile as </h3>
                    <code>https://https://devto.vimalverma.in/user/your_devto_username</code>
                </div>
                <Footer />
            </div>
        )
    }
}
