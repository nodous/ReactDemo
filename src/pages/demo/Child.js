import React from 'react'

export default class Child extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
  comonentWillMount(){
    console.log("will mount")
  }
  componentDidMount(){
    console.log("did mount")
  }
  componentWillReceiveProps(newProps){
    console.log("will props"+ newProps.name)
  }
  shouldComponentUpdate () {
    console.log("shoule update")
    return true
  }
  componentWillUpdate(){
    console.log("vill update")
  }
  componentDidUpdate(){
    console.log('Didd ')
  }
  render(){
    return <div>
        <p>{this.props.name}</p>
      </div>
  }
}