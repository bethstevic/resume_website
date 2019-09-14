import React, { PureComponent } from 'react'
import './Personal.scss'

class Personal extends PureComponent {
  render() {
    return (
      <>
        <h1>Personal Interests:</h1>
        <div className="Personal">
          <div className="Personal-topic">
            <h3>Linguistics</h3>
            <h3>Anthropology</h3>
            <h3>Reading</h3>
            <h3>Architecture</h3>
          </div>
          <div className="Personal-interest">
            <p>Currently speack 2 languages, English and Spanish, fluently. My gole is to fluently speak 5 different languages</p>
            <p>Lived in Mexico for 3 years experiencing the culture both past and present, & have plans to live in other countries one day</p>
            <p>My interest lately has been historical fiction, I also like social science fiction books similar to 1984 by George Orwell</p>
            <p>I freelance on the weekends as an architect for residential outdoor buildings such a porches, decks, and patios</p>
          </div>
        </div>
      </>
    )
  }
}

export default Personal