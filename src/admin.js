import React from 'react'
import {Row, Col} from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import './style/common.less'
import NavLeft from './components/NavLeft'
export default class Admin extends React.Component{
  render () {
    return (
      <Row className="container">
          <Col className="nav-left" span="3">
            <NavLeft></NavLeft>
          </Col>
          <Col span="21" className="main">
             <Header>
             </Header>
             <Row className="content">
               content
             </Row>
             <Footer></Footer>
          </Col>
      </Row>
    )
  }
}