import React, { Component } from 'react'
import axios from 'axios'
import {Line} from 'react-chartjs-2';


  

class Chart extends Component {
    state = {
        articles: [],
        data : []
      }
    
      componentDidMount() {
        axios.get(`https://dev.to/api/articles/?username=vimal`)
          .then(res => {
            const articles = res.data;
            console.log(articles)
            this.setState({ 
                articles,
                labels : articles.map(article=>{return article.id}),
                data : articles.map(article=>{return article.public_reactions_count})

            });
            console.log(this.data)
          })
      }
      
    render() {
        return (
            <div>
                <h1>Chart</h1>
                <ul>
                    { this.state.articles.map(article => <li>{article.public_reactions_count}</li>)}
                </ul>
                <Line
                    data={{
                        labels: this.state.labels,
                        datasets: [
                        {
                            label: 'Rainfall',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: this.state.data
                        }
                        ]
                    }}
                    options={{
                        title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                        },
                        legend:{
                        display:true,
                        position:'right'
                        }
                    }}
                />
            </div>
        )
    }
}
export default Chart;