import React, { Component } from 'react'
import axios from 'axios'
import {Line} from 'react-chartjs-2';
import Article from './Article';
import Tag from '../components/Tag'


  

class Chart extends Component {
    state = {
        articles: [],
        isLoaded: false
      }
    
      componentDidMount() {
        var config = {
            method: 'get',
            url: 'https://cors-anywhere.herokuapp.com/https://dev.to/api/articles/me',
            headers: { 
                'api-key': this.props.apikey
            }
            };
        
        axios(config)
          .then(res => {
            const articles = res.data;
            // console.log(articles)
            this.setState({ 
                articles,
                isLoaded :true ,
                labels : articles.reverse().map(article=>{return article.id}),
                page_views_count : articles.map(article=>{return article.page_views_count}),
                public_reactions_count : articles.map(article=>{return article.public_reactions_count}),
                comments_count : articles.map(article=>{return article.comments_count})

            });
            // console.log(this.data)
          })
      }
      
    render() {
        if(!this.state.isLoaded){
            return <div className="high">
            <h1>articles is Loading........</h1>
            <div className="loader"></div>
            </div>
        }
        else{
        let name = this.props.name;
        // console.log(name)
        if(this.state.articles.length < 2){
            if (this.state.articles.length === 1) {
            return (
                <div>
                <Article article={this.state.articles}/>
                <h5>Not Sufficent post to Show Graph of you post Reach and reaction, Add More post</h5>
                </div>
            )
            }else{
            return <h1>No Post</h1>
            }
        }else{
        return (
            <div>
                <Article article={this.state.articles}/>
                <Line
                    data={{
                        labels: this.state.labels,
                        datasets: [
                        {
                            label: 'Post Views',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgba(255,255,10,1)',
                            borderColor: 'rgba(255,255,255,1)',
                            borderWidth: 2,
                            data: this.state.page_views_count
                        },
                        {
                            label: 'Post Reaction',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgba(0,255,10,1)',
                            borderColor: 'rgba(255,0,255,1)',
                            borderWidth: 2,
                            data: this.state.public_reactions_count
                        },
                        {
                            label: 'Post Comments',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgba(0,100,192,1)',
                            borderColor: 'rgba(0,255,255,1)',
                            borderWidth: 2,
                            data: this.state.comments_count
                        }
                        ]
                    }}
                    options={{
                        title:{
                        display:true,
                        text:`Reaction on Dev Article of ${name}`,
                        fontSize:20
                        },
                        legend:{
                        display:true,
                        position:'top',
                        },
                        layout: {
                        padding: {
                            left: 10,
                            right: 10,
                            top: 10,
                            bottom: 10
                        }
                        },
                        onClick: (e, element) => {
                            if (element.length > 0) {
                            var ind = element[0]._index;
                            // console.log(ind);
                            var win = window.open(this.state.articles[ind].url, '_blank');
                            win.focus();
                            }
                        },

                    }}
                />
                <Tag isUser={true} article={this.state.articles}/>
            </div>
        )
    }
    }
    }
}
export default Chart;