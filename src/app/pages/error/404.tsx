/**
 *
 * About
 *
 */
import React  from 'react';
import {Link, Redirect} from "react-router-dom";


export const Error = () => {

  return (
    <div>
      <h1>404-Not Found</h1>
      <Link to='/'>Home</Link>
    </div>
  );

}
