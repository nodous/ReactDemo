import React from 'react'
import Child from "./Child"
import './index.less'
import 'antd/dist/antd.css'
import {Button} from 'antd'
export default class Life extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
  handleAdd=()=>{
    this.setState({
      count: this.state.count +1
    })
  }
  handleClick () {
    this.setState({
      count: this.state.count +1
    })
  }
  render () {
    // var style={
    //   color: "red"
    // }
    return <div className="content">
      <p>React生命周期介紹</p>
      <Button onClick={this.handleAdd}>antd点击一下</Button>
      <button onClick={this.handleAdd}>點擊1</button>
      <button onClick={this.handleClick.bind(this)}>點極2</button>
      <p>{this.state.count}</p>
      <Child name={this.state.count}></Child>
    </div>
  }
}