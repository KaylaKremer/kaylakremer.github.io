import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Home from 'containers/Home/Home';
import Projects from 'containers/Projects/Projects';
import About from 'containers/About/About';
import Contact from 'containers/Contact/Contact';
import Layout from 'components/Layout/Layout';
import Header from 'components/Header/Header';

const App = () => {
    return (
        <>
            <Header />
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                    <Redirect to="/" />
                </Switch>
            </Layout>
        </>
    );
};

export default withRouter(App);
