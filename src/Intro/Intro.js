import React, { PureComponent } from 'react';
import Header from '../Header/Header'
import './Intro.scss';

class Intro extends PureComponent {
  render() {
    return (
      <div className="Intro">
        <h1>Hi!</h1>
        <h3>My name is</h3>
        <h1>Beth Stevic</h1>
        <p>
          {
            `I am a front end software engineer based in Atlanta, GA. Programing is one of my passions in life.
            I am passionate about finding the 'why' that is behind every problem. I enjoy solving complex problems and puzzles. 
            What fascinates me about the software industry is the incredible rate it is growing and all the amazing things 
            that we can do now. I am excited to be a part of this community. `
          }
        </p>
      </div >
    )
  }
}

export default Intro;
