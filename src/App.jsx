import React, { lazy } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import "./App.css";
import { checkIsAuth, getUserData } from "localRedux/authReducer";
// lazy loading
const HomePage = lazy(() => import("./roots/homeLayout"));
const LoginPage = lazy(() => import("./roots/loginLayout"));

const App = React.memo((props) => {
  props.getUserData();
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" render={() => <LoginPage />} />
        {
          (!props.isAuth) ?
            (<Redirect to={'login'} />) :
            <Route render={() => <HomePage state={props} />} />
        }
      </Switch>
    </BrowserRouter>
  );
});
const mapStateToProps = ({ Auth }) => ({
  isAuth: Auth.isAuth
})

export default connect(mapStateToProps, { checkIsAuth, getUserData })(App);

