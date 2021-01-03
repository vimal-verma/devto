import React, { Component } from 'react'
import Pagination from "react-js-pagination";
import ReactTooltip from 'react-tooltip'

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activePage: 0,
          firstarticle : 0,
          lastarticle : 10
        };
      }
      handlePageChange(pageNumber) {
        // console.log(`active page is ${pageNumber}`);
        this.setState({
            activePage: pageNumber,
            firstarticle : (pageNumber)*10-10,
            lastarticle: pageNumber*10
        });
      }

    render() {
        // console.log("aticle" +this.props.article.length)
        // console.log(this.state.activePage ,  this.state.firstarticle, this.state.lastarticle)
        if(this.props.article.length>10){
        var pagination_button =  <Pagination
                             activePage={this.state.activePage}
                             itemsCountPerPage={10}
                             totalItemsCount={this.props.article.length}
                             pageRangeDisplayed={5}
                             onChange={this.handlePageChange.bind(this)}
                             />
        }else{
            pagination_button = <br/>
        }
        if(this.props.article.length){
        return (
            <div>
                <table>
                <tr>
                <th>Post id</th>
                <th>Post title</th>
                <th>Post Views</th>
                <th>Post react</th>
                <th>Post comment</th>
                <th>Post Date</th>
                <th>Post Tags</th>
                </tr>
                {this.props.article.slice(this.state.firstarticle,this.state.lastarticle).map(article=>{return <tr>
                 <td><a data-tip data-for='post' target="blank" href={article.url}>{article.id}</a></td>
                 <td><a target="blank" href={article.url}>{article.title}</a></td>
                 <td>{article.page_views_count}</td>
                 <td>{article.public_reactions_count}</td>
                 <td>{article.comments_count}</td>
                 <td>{article.published_timestamp}</td>
                 <td>{article.tag_list.map(tag =>{return `${tag}, `})}</td>
                </tr>})}
                </table>
                {pagination_button}
                <ReactTooltip id='post' type='light'>
                <span>Click to See post</span>
                </ReactTooltip>
            </div>
        )            
    }else{
        return <h1>No Post</h1>
    }
    }
}
export default Article