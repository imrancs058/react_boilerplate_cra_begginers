import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import {Login} from "../pages/Auth/Login/Loadable";
import {HomePage} from "../pages/HomePage";
import {About} from "../pages/About";
import {Error} from "../pages/error/404";
// import {AuthPage} from '../modules/auth'

export function PublicRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact component={Login} />
        {/*<Route path='*'  component={Error} />*/}
        <Redirect from='/' to="/login" />

      </Switch>
    </BrowserRouter>
  )
}
