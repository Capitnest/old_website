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

import Manifesto from "../pages/company/manifesto/Manifesto";
import Contact from "../pages/company/contact/Contact";
import Advertise from "../pages/company/advertise/Advertise";

import Test from "../Test";

// Learn
import Blog from "../learn/pages/Blog";
import Home from "../learn/pages/Home";
import Explore from "../learn/pages/Explore/Explore";

// Team
import TeamUser from "../pages/team/TeamUser";
import Team from "../pages/team/Team";

// Insights
import Insights from "../insights/pages/Insights";

export default function AppRouter(props) {
  const { logout, currentUser } = useAuth();

  return (
    <>
      <Router>
        <Switch>
          {currentUser ? (
            <ProtectedRoute exact path="/" component={Feeds} />
          ) : (
            <Route exact path="/" component={Homepage} />
          )}

          <Route path="/indexes" component={Indexes} />

          <Route path="/exchange/:id" component={ExchangePage} />
          <Route path="/exchanges/page/:id" component={ExchangesPage} />
          <Route path="/exchanges" component={Exchanges} />
          <Route path="/coins/:id" component={CoinPage} />
          <Route exact path="/markets" component={Markets} />
          <Route path="/markets/categories/:id" component={Categories} />
          <Route path="/markets/page/:id" component={MarketsPage} />

          <Route path="/learn" exact component={Home} />
          <Route exact path="/explore" component={Explore} />
          <Route path="/learn/post/:id" component={Blog} />

          <Route exact path="/feeds" component={Feeds} />
          <Route path="/feeds/:id" component={Hashtag} />

          <Route exact path="/research" component={Insights} />

          <Route path="/manifesto" component={Manifesto} />
          <Route path="/contact" component={Contact} />
          <Route path="/advertise" component={Advertise} />

          <Route path="/team/:id" component={TeamUser} />
          <Route path="/team" component={Team} />

          {/* <Route path="/insights" component={Insights} /> */}

          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute exact path="/login" component={Loginpage} />
          <ProtectedRoute exact path="/register" component={Registerpage} />
          <ProtectedRoute exact path="/profile" component={Profilepage} />
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
