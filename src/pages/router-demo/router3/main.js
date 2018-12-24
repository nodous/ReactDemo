import React from 'react'
import {Link} from 'react-router-dom'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        mian
        <hr />
        <Link to="/main/test">潜逃路由1</Link>
        <hr />
        <Link to="/main/456">潜逃路由2</Link>
        <hr />
        {this.props.children}
      </div>
    )
  }
}