import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="./pages/dashboard.js" exact component={Dashboard} />
        <Route path="./pages/login.js" component={Login} />
      </Switch>
    </Router>
  );
};

export default AppRouter;