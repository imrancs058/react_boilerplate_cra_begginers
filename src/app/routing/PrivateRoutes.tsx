import React, {Suspense, lazy} from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import { HomePage } from '../pages/HomePage';
import {About} from "../pages/About";
import {Error} from "../pages/error/404";


export function PrivateRoutes() {
  // const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))

  return (
    <>
    <BrowserRouter>
      <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/about'  exact component={About} />
          <Redirect from='/login' to='/' />
          <Route path='*' component={Error} />
          <Redirect to='/404' />
        </Switch>
      </BrowserRouter>
    </>
  );
}
