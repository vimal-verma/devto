import React, { Component } from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
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