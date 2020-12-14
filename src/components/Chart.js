import React, { Component } from 'react'
import axios from 'axios'
import {Line} from 'react-chartjs-2';


  

class Chart extends Component {
    state = {
        articles: [],
        data : []
      }
    
      componentDidMount() {
        axios.get(`https://dev.to/api/articles/?username=ben`)
          .then(res => {
            const articles = res.data;
            console.log(articles)
            this.setState({ 
                articles,
                labels : articles.map(article=>{return article.id}),
                public_reactions_count : articles.map(article=>{return article.public_reactions_count}),
                comments_count : articles.map(article=>{return article.comments_count})

            });
            console.log(this.data)
          })
      }
      
    render() {
        return (
            <div>
                <h1>Chart</h1>
                <Line
                    data={{
                        labels: this.state.labels,
                        datasets: [
                        {
                            label: 'Post Reaction',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: this.state.public_reactions_count
                        },
                        {
                            label: 'Post Comments',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgba(0,192,192,1)',
                            borderColor: 'rgba(0,0,255,1)',
                            borderWidth: 2,
                            data: this.state.comments_count
                        }
                        ]
                    }}
                    options={{
                        title:{
                        display:true,
                        text:'Reaction on Dev Article',
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

                    }}
                />
            </div>
        )
    }
}
export default Chart;