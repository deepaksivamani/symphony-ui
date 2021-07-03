import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Content from "./Content";
import Dashboard from "./Dashboard";

const DashboardRoutes = () => {
  console.log('in-dashboard-routes');
  return (
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/dashboard/content" component={Content} />
        </Switch>
      </Router>
  );
};

export default DashboardRoutes;
