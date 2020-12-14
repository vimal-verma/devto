import React, { Component } from 'react'
import User from './User'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          username: '',
          isSubmitted: false
        };
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
        // alert("You are submitting " + this.state.username);
        this.setState({isSubmitted: true})
      }
      myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }
      render() {
        return (
          <div>
          <form onSubmit={this.mySubmitHandler}>
          <h1>Hello {this.state.username}</h1>
          <p>Enter your name, and submit:</p>
          <input
            type='text'
            onChange={this.myChangeHandler}
          />
          <input
            type='submit'
          />
          </form>
          {this.state.isSubmitted &&  <User name={this.state.username}/>}
         
          </div>
        );
    }
}
export default Search