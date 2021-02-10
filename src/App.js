import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Header from './components/header/Header'
import Login from './components/login/Login'

const App = () => {
  return(
    <div>
      <Header />
      <div className="body-div">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </div>
    </div>
  )
}

export default App;
