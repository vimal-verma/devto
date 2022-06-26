import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'

class Share extends Component {
    render() {
        return (
            <div className="share">
                <a data-tip data-for='twshare' target="blank" href={'https://twitter.com/intent/tweet?text=Hello, See my @ThePracticalDev Account analysis at https://https://devto.vimalverma.in/user/' + this.props.user + ' by @vimalverma_in'}><img className="sm-item" src="https://logo.vdev.in/img?tool=twitter" alt="Project" /></a>
                <a data-tip data-for='fbshare' target="blank" href={'https://www.facebook.com/sharer.php?u=https://https://devto.vimalverma.in/user/' + this.props.user}><img className="sm-item" src="https://logo.vdev.in/img?tool=facebook" alt="Project" /></a>
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