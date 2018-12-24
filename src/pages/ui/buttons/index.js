import React from 'react'
import './index.less'
import {Card, Button} from 'antd'
export default class Buttons extends React.Component {
  state = {
    loading: true
  }
  handleCloseLoading =()=> {
    this.setState({
      loading: false
    })
  }
  render () {
    return (
      <div>
        <Card title="基础按钮" className="card-wrap">
           <Button typ="primary">登陆</Button>
           <Button>登陆</Button>
           <Button type="dashed">登陆</Button>
           <Button type="danger">登陆</Button>
           <Button disabled>登陆</Button>
        </Card>
        <Card title="圖形按鈕" className="card-wrap">
           <Button icon="plus">創建</Button>
           <Button icon="edit">編輯</Button>
           <Button shape="circle" icon="search"></Button>
           <Button icon="warning">危險</Button>
           <Button icon="download" >下载</Button>
        </Card>
        <Card title="loading按钮" className="card-wrap">
           <Button type="primary" loading={this.state.loading}>确定</Button>
           <Button type="primary" shape="circle" loading={this.state.loading}></Button>
           <Button type="primary" loading={this.state.loading}>点击加载</Button>
           <Button shape="circle" loading={this.state.loading}></Button>
           <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
         <Card title="按钮组">
           <Button.Group>
             <Button icon="left">前进</Button>
             <Button icon="right">后退</Button>
           </Button.Group>
         </Card>
      </div>
    )
  }
}