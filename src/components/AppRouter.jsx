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
import Dashboard from "../pages/Dashboard/Dashboard";

import Indexes from "../markets/Indexes";
import Exchanges from "../markets/Exchanges";
import ExchangePage from "../markets/ExchangePage";
import ExchangesPage from "../markets/ExchangesPage";
import Markets from "../markets/Markets";
import CoinPage from "../markets/CoinPage";
import Categories from "../markets/Categories";
import MarketsPage from "../markets/MarketsPage";

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

          {/* <Route exact path="/news" component={News} />
          <Route path="/news/:id" component={Blog} /> */}

          <Route path="/indexes" component={Indexes} />

          <Route path="/exchange/:id" component={ExchangePage} />
          <Route path="/exchanges/page/:id" component={ExchangesPage} />
          <Route path="/exchanges" component={Exchanges} />
          <Route path="/coins/:id" component={CoinPage} />
          <Route exact path="/markets" component={Markets} />
          <Route path="/markets/categories/:id" component={Categories} />
          <Route path="/markets/page/:id" component={MarketsPage} />

          <Route exact path="/feeds" component={Feeds} />
          <Route path="/feeds/:id" component={Hashtag} />

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
