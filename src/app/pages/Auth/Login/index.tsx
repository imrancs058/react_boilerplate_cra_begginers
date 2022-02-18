import React, {useEffect} from 'react';
import * as Yup from 'yup';
import {useFormik} from "formik";
import {useDispatch, useSelector} from 'react-redux';
import {
  selectAuth,
} from 'app/redux/Auth/slice/selectors';
import {useAuthSlice} from "../../../redux/Auth/slice";
import {useHistory} from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  const { actions } = useAuthSlice();
  const username = useSelector(selectAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem('Login');
    if(user!==null){const data= JSON.parse(user);
    dispatch(actions.login(data));
    }
  }, [])

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      last_name: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      // history.push('/');
      dispatch(actions.login(values));
      localStorage.setItem("Login", JSON.stringify(values))
    },
  });
  return (
    <>
      <h1>{username}</h1>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="first_name">First Name</label>
      <input
        id="first_name"
        name="first_name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.first_name}
      />
      {formik.touched.first_name && formik.errors.first_name ? (
        <div>{formik.errors.first_name}</div>
      ) : null}

      <label htmlFor="last_name">Last Name</label>
      <input
        id="last_name"
        name="last_name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.last_name}
      />
      {formik.touched.last_name && formik.errors.last_name ? (
        <div>{formik.errors.last_name}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
    </>
  );
};
