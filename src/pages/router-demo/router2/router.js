import React from 'react'
import About from './../router1/about'
import topic from './../router1/topic'
import Main from './main'
import Home from './../router1/home'
import Child from './../router1/child'

import {HashRouter as Router, Route} from 'react-router-dom'

export default class IRouter extends React.Component{
  render () {
    return (
      <Router>
        <Home>
          <Route path="/main" render={()=>
              <Main>
                <Route path="/main/a" component={Child}></Route>
              </Main>
          }></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/topic" component={topic}></Route>
        </Home>
      </Router>
    )
  }
}