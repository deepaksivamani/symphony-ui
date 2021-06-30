import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../pages/auth/Login";
import Signup from "../../pages/auth/Signup";
import Landing from "../../pages/auth/Landing";
import Navbar from "../../components/Navbar";

const AuthRoutes = () => {
  return (
    <Router>
        {/* <Navbar /> */}
        <div className="p-2" style={{background: '#F2F2F2'}}>
          <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
  );
};

export default AuthRoutes;
