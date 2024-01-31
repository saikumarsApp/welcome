import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  render() {
    const {isSubscribe} = this.state
    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="about">Thank You! Happy Learning</p>
        {isSubscribe ? (
          <button type="button">Subscribed</button>
        ) : (
          <button type="button">Subscribe</button>
        )}
      </div>
    )
  }
}
export default Welcome
