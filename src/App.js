import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import About from 'containers/About';
import Projects from 'containers/Projects';
import Contact from 'containers/Contact';
import Home from 'containers/Home';
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
