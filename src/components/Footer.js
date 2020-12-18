import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
            <div className="sm">
            <a data-tip data-for='github' target="blank" href="https://github.com/vimalverma558/"><img className="sm-item" src="https://logo.letskhabar.com/img?tool=github" alt="Project" /></a>
            <a data-tip data-for='twitter' target="blank" href="https://twitter.com/vimalverma558/"><img className="sm-item" src="https://logo.letskhabar.com/img?tool=twitter" alt="Project" /></a>
            <a data-tip data-for='linkedin' target="blank" href="https://www.linkedin.com/in/vimalverma558"><img className="sm-item" src="https://logo.letskhabar.com/img?tool=linkedin" alt="Project" /></a>
            <a data-tip data-for='dev' target="blank" href="https://dev.to/vimal/"><img className="sm-item" src="https://logo.letskhabar.com/img?tool=dev" alt="Project" /></a>
            <a data-tip data-for='website' target="blank" href="https://vimal.websense.tech/"><img className="sm-item" src="https://logo.letskhabar.com/img?tool=globe" alt="Project" /></a>
            </div>            
            <p>Made with <span role="img" aria-label="Heart"> ❤️ </span> by <a href="https://github.com/vimalverma558/">Vimal Kumar</a> </p>
            <ReactTooltip id='github' type='light'>
            <span>github</span>
            </ReactTooltip>
            <ReactTooltip id='twitter' type='light'>
            <span>twitter</span>
            </ReactTooltip>
            <ReactTooltip id='linkedin' type='light'>
            <span>linkedin</span>
            </ReactTooltip>
            <ReactTooltip id='dev' type='light'>
            <span>dev</span>
            </ReactTooltip>
            <ReactTooltip id='website' type='light'>
            <span>website</span>
            </ReactTooltip>
            </div>
        )
    }
}
