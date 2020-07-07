import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Home from 'containers/Home';
import Projects from 'containers/Projects';
import About from 'containers/About';
import Contact from 'containers/Contact';
import Layout from 'components/Layout/Layout';
import Header from 'components/Header/Header';
import './app.scss';

const App = () => {
    return (
        <div className="app">
            <Layout>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                    <Redirect to="/" />
                </Switch>
            </Layout>
        </div>
    );
};

export default withRouter(App);
