import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import {About} from "../About";
import {Link, Redirect} from "react-router-dom";
import {Logout} from "../Auth/Logout/Logout";
import { useHistory } from "react-router-dom"
export function HomePage() {
  const history = useHistory();
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>My HomePage</span>{' '}
      <Link to='/about'>About</Link>{' '}
      <Logout/>

    </>
  );
}
