// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRandom = () => {
    this.setState({randomNumber: parseInt(Math.random() * 100)})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="main-container">
        <div className="inner-holder">
          <h1 className="top-heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.generateRandom}>
            Generate
          </button>
          <p className="random">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
