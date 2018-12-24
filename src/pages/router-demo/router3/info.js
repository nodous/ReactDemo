import React from 'react'
// import {Link} from 'react-router-dom'
export default class info extends React.Component {
  render () {
    return (
      <div>
        這裏設置動態路由宮嗯
        {this.props.match.params.mainId}
      </div>
    )
  }
}