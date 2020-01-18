import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dasboard from '../Pages/Admin'
import Home from '../Pages/Home'
import Systems from '../Pages/Systems'
import Programing from '../Pages/Programing'
import Register from '../Pages/Register'
import SignIn from '../Pages/Signin'
import SignUp from '../Pages/Signup'
import Page404 from '../Pages/Page404'
import { SinglePost } from '../Pages/Home/SinglePost'

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/dashboard" component={Dasboard} />
      <Route exact path="/systems" component={Systems} />
      <Route exact path="/programing" component={Programing} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route component={Page404} />
    </Switch>
  )
}

export default AppRouter
