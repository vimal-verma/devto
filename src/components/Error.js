import React, { Component } from 'react'
import Footer from './Footer'
import Nav from './Nav'

export default class Error extends Component {
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
