import React, { Component } from 'react'
import Nav from './Nav';
import Search from './Search'

class Home extends Component {
    render() {
        return (
            <div>
            <Nav />
            <Search/>

            </div>
        )
    }
}
export default Home;