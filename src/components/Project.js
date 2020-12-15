import React, { Component } from 'react'
import Footer from './Footer'
import Nav from './Nav'

export default class Project extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <h1 className="main">Project</h1>
                <Footer/>
            </div>
        )
    }
}
