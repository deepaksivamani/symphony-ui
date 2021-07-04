import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../../pages/post-auth/dashboard";
import Navbar from "../../components/Navbar";
import AddArtist from "../../pages/post-auth/add-artist";
import Landing from "../../pages/post-auth/Landing";

const PostAuthRoutes = () => {
  return (
    <div className="bg-background-100 min-h-screen h-full">
      <Router>
        <Navbar />
        <div className="main-body">
          <Switch>
          <Route exact path="/" component={Landing} />
            <Route exact path="/add-artist" component={AddArtist} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default PostAuthRoutes;
