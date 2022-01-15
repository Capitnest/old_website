import React from "react";
import Signup from "../auth/Signup";
import "semantic-ui-css/semantic.min.css";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Login from "../auth/Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../auth/ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Home from "../pages/Home";
import Navbarr from "./Navbar/Navbarr";
import Wallet from "./Wallet";
import SendCoins from "./SendCoins";
import Withdraw from "../pages/Withdraw";

import Overview from "./Market/Overview";
import Buy from "./Market/Buy";

import Plans from "../auth/Plans";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute path="/send-coins" component={SendCoins} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <PrivateRoute path="/wallet" component={Wallet} />

          <PrivateRoute path="/market/buy" component={Buy} />
          <Route path="/market/overview" component={Overview} />
          <Route exact path="/" component={Home} />

          {/*===== AUTH =====*/}

          <Route path="/signup/plans" component={Plans} />
          <Route path="/signup/monthly/create-account" component={Signup} />

          <Route path="/login" component={Login} />

          <PrivateRoute path="/withdraw" component={Withdraw} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
