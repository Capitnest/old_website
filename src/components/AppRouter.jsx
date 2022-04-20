import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import Homepage from "../pages/Home/Homepage";
import Loginpage from "../pages/Loginpage";
import NotfoundPage from "../pages/NotfoundPage";
import Profilepage from "../pages/Profile/Profilepage";
import Registerpage from "../pages/Registerpage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import TestPage from "../pages/TestPage";
import News from "../news/News";
import Blog from "../news/Blog";
import Feeds from "../feeds/Feeds";
import Nfts from "../nft/Nfts";
import Dashboard from "../pages/Dashboard/Dashboard";

import Markets from "../markets/Markets";
import CoinPage from "../markets/CoinPage";

import Influencers from "../feeds/Influencers";

import RoadMap from "../pages/company/roadmap/RoadMap";
import Hashtag from "../feeds/Hashtag";

export default function AppRouter(props) {
  const { logout, currentUser } = useAuth();

  return (
    <>
      <Router>
        <Switch>
          {currentUser ? (
            <ProtectedRoute exact path="/" component={Dashboard} />
          ) : (
            <Route exact path="/" component={Homepage} />
          )}

          <Route exact path="/news" component={News} />
          <Route path="/news/:id" component={Blog} />

          <Route exact path="/markets" component={Markets} />
          <Route path="/markets/:id" component={CoinPage} />

          <Route exact path="/feeds" component={Feeds} />
          <Route path="/feeds/:id" component={Hashtag} />
          <Route path="/influencer/:id" component={Influencers} />

          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute exact path="/login" component={Loginpage} />
          <ProtectedRoute exact path="/register" component={Registerpage} />
          <ProtectedRoute exact path="/profile" component={Profilepage} />
          <ProtectedRoute exact path="/test" component={TestPage} />
          <ProtectedRoute
            exact
            path="/forgot-password"
            component={ForgotPasswordPage}
          />
          <ProtectedRoute
            exact
            path="/reset-password"
            component={ResetPasswordPage}
          />
          <Route exact path="*" component={NotfoundPage} />
        </Switch>
      </Router>
    </>
  );
}

function ProtectedRoute(props) {
  const { currentUser } = useAuth();
  const { path } = props;
  console.log("path", path);
  const location = useLocation();
  console.log("location state", location.state);

  if (
    path === "/login" ||
    path === "/register" ||
    path === "/forgot-password" ||
    path === "/reset-password"
  ) {
    return currentUser ? (
      <Redirect to={location.state?.from ?? "/profile"} />
    ) : (
      <Route {...props} />
    );
  }
  return currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: path },
      }}
    />
  );
}
