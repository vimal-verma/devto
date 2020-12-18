import React, { Component } from 'react'

class Share extends Component {
    render() {
        return (
            <div className="share">
            <a target="blank" href={'https://twitter.com/intent/tweet?text=Hello, See my @ThePracticalDev Account analysis at https://websense.tech/user/'+this.props.user+ ' by @vimalverma558'}><img className="sm-item" src="https://logo.letskhabar.com/img?tool=twitter" alt="Project" /></a>
            <a target="blank" href={'https://www.facebook.com/sharer.php?u=https://websense.tech/user/'+this.props.user }><img className="sm-item" src="https://logo.letskhabar.com/img?tool=facebook" alt="Project" /></a>
            </div>
        )
    }
}
export default Share