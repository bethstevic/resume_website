import React, { PureComponent } from 'react'
import './Education.scss'

class Education extends PureComponent {
  render() {
    return (
      <>
        <h1>Education:</h1>
        <div className="Education">
          <div className="Education-school">
            <h3>Hack Reactor</h3>
            <h3>Hack Reactor Prep</h3>
            <h3>Shaw Academy</h3>
            <h3>Shaw Academy</h3>
            <h3>Skill Crush</h3>
          </div>
          <div className="Education-description">
            <p>Advanced Software Engineering Immersive Program</p>
            <p>Prep for immersive Program</p>
            <p>Introduction to Mobile App Development</p>
            <p>Introduction to Web Development</p>
            <p>Introduction to Web Development</p>
          </div>
          <div className="Education-year">
            <p>2017</p>
            <p>2016</p>
            <p>2016</p>
            <p>2015</p>
            <p>2015</p>
          </div>
        </div>
      </>
    )
  }
}

export default Education