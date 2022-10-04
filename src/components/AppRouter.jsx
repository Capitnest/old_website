import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import { db } from "../utils/init-firebase";
import { ref, onValue, get, child, getDatabase } from "firebase/database";

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
import Research from "../insights/pages/Research";

import Pricing from "../pages/Pricing";

export default function AppRouter(props) {
  const { logout, currentUser } = useAuth();
  const [plan, setPlan] = useState("");

  useEffect(() => {
    if (currentUser) {
      axios
        .get(
          `https://timnik.pythonanywhere.com/get-plan?uid=${currentUser.uid}`
        )
        .then((response) => {
          setPlan(response.data);
          console.log(plan);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currentUser]);

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
          <ProRoute path="/research/:id" component={Research} plan={plan} />
          <Route path="/manifesto" component={Manifesto} />
          <Route path="/contact" component={Contact} />
          <Route path="/advertise" component={Advertise} />

          <Route path="/team/:id" component={TeamUser} />
          <Route path="/team" component={Team} />

          {/* <Route path="/insights" component={Insights} /> */}

          <Route exact path="/pricing" component={Pricing} />

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
  const location = useLocation();

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

function ProRoute(props) {
  const { currentUser } = useAuth();
  const { path } = props;
  const location = useLocation();

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
    <>
      {props.plan === "pro" ? (
        <>
          <Route {...props} />
        </>
      ) : (
        <Redirect
          to={{
            pathname: "/pricing",
            state: { from: path },
          }}
        />
      )}
    </>
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: path },
      }}
    />
  );
}
