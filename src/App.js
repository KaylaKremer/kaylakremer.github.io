import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import About from 'pages/About';
import Projects from 'pages/Projects';
import Contact from 'pages/Contact';
import Home from 'pages/Home';
import './app.scss';

const App = () => {
    return (
        <div className="app">
            <Layout>
                <Switch>
                    <Route path="/about" exact component={About} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/" exact component={Home} />
                    <Redirect to="/" />
                </Switch>
            </Layout>
        </div>
    );
};

export default withRouter(App);
