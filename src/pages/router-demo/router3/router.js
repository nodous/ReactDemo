import React from 'react'
import About from './../router1/about'
import topic from './../router1/topic'
import Main from './main'
import Info from './info'
import Nomatch from './no-match'
import Home from './home'
// import Child from './../router1/child'

import {HashRouter as Router, Route, Switch} from 'react-router-dom'

export default class IRouter extends React.Component{
  render () {
    return (
      <Router>
        <Home>
        <Switch>
          <Route path="/main" render={()=>
              <Main>
                <Route path="/main/:mainId" component={Info}></Route>
              </Main>
          }></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/topic" component={topic}></Route>
          <Route component={Nomatch}></Route>
        </Switch>
        </Home>
      </Router>
    )
  }
}