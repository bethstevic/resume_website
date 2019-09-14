import React, { PureComponent } from 'react'
import './Experience.scss'

class Experience extends PureComponent {
  render() {
    return (
      <>
        <h1>Professional Experience:</h1>
        <div className="Experience">
          <div className="Experience-job">
            <h2>RentPath</h2>
            <p>I have worked here since July 2017. A few of my accomplishments are:</p>
            <dl>
              <dt>Built new features according to Product and Design specifications</dt>
              <dd>Switiching from mapbox to google maps</dd>
              <dd>Implementing Free Draw on our desktop google map</dd>
              <dd>Creating inline filter cards</dd>
              <dd>Building redesigned pages</dd>
              <dt>Diagnosed and fixed bugs in application</dt>
              <dt>Lead initiatives to replace old code to improve maintainability and performance</dt>
              <dt>Performed daily peer code reviews</dt>
              <dt>Helped convert code base to use React, Redux, TypeScript, Jest, and Scss</dt>
              <dt>Wrote unit tests and e2e tests (with Nightwatch) fpr each feature built and each bug fixed</dt>
              <dt>Contributed to an in-house library that help reusable components</dt>
            </dl>
          </div>
          <div className="Experience-job">
            <h2>Atlanta Porch and Patio</h2>
            <p>I worked as a project coordinator from 2010 until 2017. Some of my responsibilities were: </p>
            <dl>
              <dt>Increased profit margins by 20% without raising customer costs by building a pricing and cost tracking program using Excel</dt>
              <dt>Increased employee productivity and efficiency by 3X through creation and optimization of organizational processess</dt>
              <dt>Mastered and AutoCad-like software (Softplan) and wrote an instruction manual for onboarding new employees</dt>
              <dt>Increased company productivity by mastering and personalizing Business Manager (a Microsoft Acess pricing program)</dt>
              <dt>Quickly and consistently promoted due to outstanding performance</dt>
            </dl>
          </div>
        </div>
      </>
    )
  }
}

export default Experience