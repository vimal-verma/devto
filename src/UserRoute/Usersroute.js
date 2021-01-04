import React, { Component } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import User from '../HomeRoute/User'

class Userroute extends Component {
    render() {
        console.log(this.props.match.params.username)
        return (
            <div>
                <Nav/>
                <User name={this.props.match.params.username.toLowerCase()}/>
                <Footer/>
            </div>
        )
    }
}
export default Userroute