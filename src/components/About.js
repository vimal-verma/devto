import React, { Component } from 'react'
import Footer from './Footer'
import Nav from './Nav'

export default class About extends Component {
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
