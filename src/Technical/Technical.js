import React, { PureComponent } from 'react'
import './Technical.scss'

class Technical extends PureComponent {
  render() {
    return (
      <>
        <h1>Technical Skills:</h1>
        <div className="Technical">
          <div className="Technical-category">
            <h2>Strong</h2>
            <li>ReactJs</li>
            <li>Redux</li>
            <li>Typescript</li>
            <li>Git</li>
            <li>ES5</li>
            <li>ES6</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>Mocha</li>
            <li>Jest</li>
            <li>Nightwatch</li>
          </div>
          <div className="Technical-category">
            <h2>Experienced</h2>
            <li>AngularJs</li>
            <li>React Native</li>
            <li>D3</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>NodeJS/Express</li>
            <li>AWS</li>
            <li>AuthO</li>
          </div>
        </div>
      </>
    )
  }
}

export default Technical