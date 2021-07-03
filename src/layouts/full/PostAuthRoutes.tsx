import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import AddArtist from "../../pages/post-auth/add-artist";
import Landing from "../../pages/post-auth/Landing";
import DashboardRoutes from "../../pages/post-auth/DashboardModule/DashboardRoutes";

const PostAuthRoutes = () => {
  const DashboardRoutes = lazy(() => import('../../pages/post-auth/DashboardModule/DashboardRoutes'));
  return (
    <div>
      <Router>
        <Navbar />
        <div className="p-2 mt-8">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
          <Route exact path="/" component={Landing} />
            <Route path="/add-artist" component={AddArtist} />
            <Route path="/dashboard" component={DashboardRoutes} />
          </Switch>
          </Suspense>
        </div>
      </Router>
    </div>
  );
};

export default PostAuthRoutes;
