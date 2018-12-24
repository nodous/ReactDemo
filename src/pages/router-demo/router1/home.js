import React from 'react'
import {Link} from 'react-router-dom'

export default class home extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li>
            <Link to="/main">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/topic">topic</Link>
          </li>
        </ul>
        <hr />
        {this.props.children}
      </div>
    )
  }
}