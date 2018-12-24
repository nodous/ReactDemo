import React from 'react'
import {Link} from 'react-router-dom'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        mian
        <Link to="/main/a">帶你我</Link>
        <hr />
        {this.props.children}
      </div>
    )
  }
}