import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default withRouter(App);
