/*!

=========================================================
* Material Dashboard PRO React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.jsx";
import RtlLayout from "layouts/RTL.jsx";
import AdminLayout from "layouts/Admin.jsx";
import Homepage from "views/Pages/index"
import Uploadpage from "views/Pages/Upload"
import UserProfile from "views/Pages/UserProfile";

import "assets/scss/material-dashboard-pro-react.scss?v=1.7.0";
import RegisterPage from "views/Pages/RegisterPage";
import LoginPage from "views/Pages/LoginPage";


const hist = createBrowserHistory();

fetch('/users')
  .then(res => res.json())
  .then(users => {
    console.log(users)
  })

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/rtl" component={RtlLayout} />
      <Route path="/auth" component={AuthLayout} />
      <Route path="/admin" component={AdminLayout} />
      <Route path="/home-page" component={Homepage} />
      <Route path="/user-profile" component={UserProfile} />
      <Route path="/upload-page" component={Uploadpage} />
      <Route path="/register-page" component={RegisterPage} />
      <Route path="/login-page" component={LoginPage} />
      <Redirect from="/" to="/auth/login-page" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
