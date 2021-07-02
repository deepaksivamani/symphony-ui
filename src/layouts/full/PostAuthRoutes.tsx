import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Connect from "../../pages/post-auth/connect";
import Dashboard from "../../pages/post-auth/dashboard";
import Navbar from "../../components/Navbar";
import AddArtist from "../../pages/post-auth/add-artist";

const PostAuthRoutes = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="p-2 mt-8">
          <Switch>
            <Route exact path="/add-artist" component={AddArtist} />
            <Route exact path="/connect" component={Connect} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default PostAuthRoutes;
