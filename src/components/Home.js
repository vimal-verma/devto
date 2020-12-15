import React, { Component } from 'react'
import Footer from './Footer';
import Nav from './Nav';
import Search from './Search'

class Home extends Component {
    render() {
        return (
            <div>
            <Nav />
            <Search/>
            <Footer/>
            </div>
        )
    }
}
export default Home;