import React from 'react'
import {Row, Col}from 'antd'
import './index.less'
import Util from '../../utils/utils'
export default class Header extends React.Component{
  state={
  }
  componentWillMount () {
    this.setState({
      userName: '你妈妈'
    })
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      })
    }, 1000);
  }
  render () {
    return (
      <div>
        <Row className="header">
          <Col span="24" className='header-top'>
             <span>欢迎，{this.state.userName} !</span>
             <a href="www.baidu.com" >退出</a>
          </Col>
        </Row>
        <Row>
          <Col span="4" className="breadcrumb">
            首页
          </Col>
          <Col span="20" className="breadcr">
             <span>{this.state.sysTime}</span>
             <span>晴天</span>
          </Col>
        </Row>
      </div>
    )
  }
}