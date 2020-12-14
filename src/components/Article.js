import React, { Component } from 'react'

class Article extends Component {
    render() {
        console.log("aticle" +this.props.article)
        return (
            <div>
                <table>
                <tr>
                <th>Post id</th>
                <th>Post title</th>
                <th>Post react</th>
                <th>Post comment</th>
                <th>Post Date</th>
                </tr>
                {this.props.article.map(article=>{return <tr>
                 <td>{article.id}</td>
                 <td>{article.title}</td>
                 <td>{article.public_reactions_count}</td>
                 <td>{article.comments_count}</td>
                 <td>{article.readable_publish_date}</td>
                </tr>})}
                </table>
            </div>
        )
    }
}
export default Article