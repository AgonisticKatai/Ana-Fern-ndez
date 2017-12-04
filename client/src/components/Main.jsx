import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import PrivateRoute from './PrivateRoute/PrivateRoute.jsx'
import HomePage from './HomePage/HomePage.jsx'
import AdminPage from './AdminPage/AdminPage.jsx'

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/admin' component={AdminPage} />
      </Switch>
    </div>
  )
}

export default Main
