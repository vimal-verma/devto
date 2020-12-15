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
                <th>Post Tags</th>
                </tr>
                {this.props.article.map(article=>{return <tr>
                 <td><a href={article.url}>{article.id}</a></td>
                 <td><a href={article.url}>{article.title}</a></td>
                 <td>{article.public_reactions_count}</td>
                 <td>{article.comments_count}</td>
                 <td>{article.readable_publish_date}</td>
                 <td>{article.tags}</td>
                </tr>})}
                </table>
            </div>
        )
    }
}
export default Article