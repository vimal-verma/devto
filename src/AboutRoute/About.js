import React, { Component } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default class About extends Component {
    componentDidMount() {
        document.title = `About | DevTo App 👨‍💻`
        const favicon = document.getElementById("favicon");
        favicon.href = `https://logo.vdev.in/name?name=A&bgc=yellow&col=Black`;
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="main">
                    <h3>This Website is Developed for <a className="blue" href="https://dev.to/devteam/announcing-the-digitalocean-app-platform-hackathon-on-dev-2i1k">Do Hackathon</a> By Vimal Kumar</h3>
                    <h4>And Hosted on digitalocean</h4>
                    <a href="https://cloud.digitalocean.com/apps/new?repo=https://github.com/vimal-verma/devto/tree/master&refcode=aaa4b40ae64a"> <img src="https://mp-assets1.sfo2.digitaloceanspaces.com/deploy-to-do/do-btn-blue.svg" alt="Deploy to DO" /> </a>
                </div>
                <Footer />
            </div>
        )
    }
}
