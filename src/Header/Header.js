import React, { PureComponent } from 'react';
import './Header.scss';

class Header extends PureComponent {
  render() {
    return (
      <div className="Header">
        <div className="Header-links">
          <span>Technical Skills</span>
          <span>Professional Experience</span>
          <span>Education</span>
          <span>Personal Interests</span>
        </div>
        <div className="Header-social">
          <a
            href="https://github.com/bethstevic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="Header-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/beth-stevic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="Header-linkedin" />
          </a>
        </div>
      </div>
    )
  }
}

export default Header;