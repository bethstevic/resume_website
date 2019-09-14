import React, { PureComponent } from 'react';

import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Header from '../Header/Header'
import Intro from '../Intro/Intro'
import Personal from '../Personal/Personal'
import Technical from '../Technical/Technical'
import './Layout.scss';

class Layout extends PureComponent {
  render() {
    return (
      <div className="Layout">
        <Header />
        <div className="Layout-body">
          <Intro />
          <Technical />
          <Experience />
          <Education />
          <Personal />
        </div>
      </div >
    )
  }
}

export default Layout;
