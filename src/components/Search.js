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
        this.setState({isSubmitted: false})
      }
      render() {
        if (this.state.username) {
          var showtext= 'Submit to See Result For ' + this.state.username
        }else{
          showtext= 'Enter Username of User or organization, and submit:'
        }
        if(this.state.isSubmitted){
          showtext = 'Showing Result For '+ this.state.username
        }
        return (
          <div>
          <form onSubmit={this.mySubmitHandler}>
          <h4>{showtext}</h4>
          <input
            type='text'
            onChange={this.myChangeHandler}
            placeholder="Vimal"
          />
          <input
            type='submit'
            value="Submit"
          />
          </form>
          {this.state.isSubmitted &&  <User name={this.state.username}/>}
         
          </div>
        );
    }
}
export default Search