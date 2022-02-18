/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 */

import React, {FC} from 'react'
import {Redirect, Switch, Route, BrowserRouter} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import {
  selectAuth,
} from 'app/redux/Auth/slice/selectors';
import {useAuthSlice} from "../redux/Auth/slice";
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import {Helmet} from "react-helmet-async";
import {useTranslation} from "react-i18next";
import { SecureMasterLayout} from "../pages/Layouts/PrivateLayout/SecureMasterLayout";
import {MasterLayout} from "../pages/Layouts/PublicLayout/MasterLayout";
import { useLocation } from "react-router-dom";

const Routes: FC = () => {

  const { actions } = useAuthSlice();
  const isAuthorized = useSelector(selectAuth);
  const { i18n } = useTranslation();

  return (
    <>
        <BrowserRouter>
          <Helmet
            titleTemplate="%s - React Boilerplate"
            defaultTitle="React Boilerplate"
            htmlAttributes={{ lang: i18n.language }}
          >
            <meta name="description" content="A React Boilerplate application" />
          </Helmet>
          <Switch>
            {/*<h1>Path is: {location.pathname}</h1>*/}
            {!isAuthorized?(
              <>
                <Switch>
                  <SecureMasterLayout>
                    <PublicRoutes/>
                  </SecureMasterLayout>
                </Switch>
              </>
            ):(
              <>
                <MasterLayout>
                  <PrivateRoutes />
                </MasterLayout>
              </>
            )}
            </Switch>
        </BrowserRouter>
    </>
  )
}

export {Routes}
