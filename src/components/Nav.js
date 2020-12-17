import React, { Component } from "react";
import { NavLink,Link } from 'react-router-dom'; 
import './nav.css'

class Nav extends Component {
    render() {
      return (
        <div>
          <header className="header">
            <NavLink to="/" tag={Link} className="logo">
            <h2>Dev Finder</h2>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu">
              <li>
                <a
                  href="/"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </a>
              </li>
              <li>
                <NavLink
                  to="/about"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <a
                  target="blank" 
                  href="https://vimal.websense.tech/Skill"
                  to="https://vimal.websense.tech/Skill"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  target="blank" 
                  href="https://github.com/vimalverma558/devto"
                  to="https://vimal.websense.tech/Skill"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                <i class="fas fa-star"></i> Star me on Github <i class="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </header>
        </div>
      );
    }
  }
  
  export default Nav;
  const onMouseEnter = (event, color) => {
    const el = event.target;
    el.style.backgroundColor = "#2b6464";
  };
  
  const onMouseOut = (event) => {
    const el = event.target;
    el.style.backgroundColor = "transparent";
  };
  