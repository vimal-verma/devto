import React, { Component } from 'react'
import User from './User'
import Main from './Main'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          apikey: '',
          isSubmitted: false
        };
      }
      componentDidMount(){
        document.title = `👨‍💻 DevTo App 👨‍💻`
        const favicon = document.getElementById("favicon");
        favicon.href = `https://logo.letskhabar.com/name?name=D&bgc=yellow&col=Black`;
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
        // alert("You are submitting " + this.state.apikey);
        this.setState({isSubmitted: true})
      }
      myChangeHandler = (event) => {
        this.setState({apikey: event.target.value});
        this.setState({isSubmitted: false})
      }
      render() {
        if (this.state.apikey) {
          var showtext= 'Submit to See Result For Api-Key =' + this.state.apikey
        }else{
          showtext= 'Enter Your Api-Key, and submit:'
        }
        if(this.state.isSubmitted){
          showtext = 'Showing Result For Api-Key = '+ this.state.apikey
        }
        return (
          <div>
          <form onSubmit={this.mySubmitHandler}>
          <h4>{showtext}</h4>
          <input
            type='text'
            onChange={this.myChangeHandler}
            placeholder="apikey"
          />
          <input
            className="submit"
            type='submit'
            value="Submit"
          />
          </form>
          {this.state.isSubmitted &&  <User apikey={this.state.apikey}/>}
          {!this.state.isSubmitted &&  <Main/>}
         
          </div>
        );
    }
}
