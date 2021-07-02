import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './nav-component/index.js';
import updateDocument from './updateDocument';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoPage />
        </Route>         
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

function Home() {
  updateDocument('Home');

  return <div> <h2>Home</h2> <h5> Testing :D </h5> </div>;
}

function Dashboard() {
  updateDocument('Dashboard');
  return <h2>Dashboard</h2>;
}

function NoPage() {
  return <h2>404 Page Not Found</h2>;
}