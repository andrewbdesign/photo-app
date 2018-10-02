import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'
import About from '../components/About'
import Create from '../components/Create'
import Dashboard from '../components/Dashboard'
import Help from '../components/Help'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true}/>
        <Route path="/create" component={Create} />
        <Route path="/about" component={About} />
        <Route path="/help" component={Help} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter