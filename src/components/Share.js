import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'

class Share extends Component {
    render() {
        return (
            <div className="share">
            <a data-tip data-for='twshare' target="blank" href={'https://twitter.com/intent/tweet?text=Hello, See my @ThePracticalDev Account analysis at https://websense.tech/user/'+this.props.user+ ' by @vimalverma558'}><img className="sm-item" src="https://logo.letskhabar.com/img?tool=twitter" alt="Project" /></a>
            <a data-tip data-for='fbshare' target="blank" href={'https://www.facebook.com/sharer.php?u=https://websense.tech/user/'+this.props.user }><img className="sm-item" src="https://logo.letskhabar.com/img?tool=facebook" alt="Project" /></a>
            <ReactTooltip id='twshare' type='light'>
            <span>Share on Twitter</span>
            </ReactTooltip>
            <ReactTooltip id='fbshare' type='light'>
            <span>Share on Facebook</span>
            </ReactTooltip>
            </div>
        )
    }
}
export default Share