import React from 'react';
import NavList from 'components/Navigation/NavList/NavList';
import './navigation.module.scss';

const list = [
    {
        link: '/',
        exact: true,
        content: ` Home `
    },
    {
        link: '/projects',
        exact: true,
        content: ` Projects `
    },
    {
        link: '/about',
        exact: true,
        content: ` About `
    },
    {
        link: '/contact',
        exact: true,
        content: ` Contact `
    }
];

const Navigation = props => (
    <nav className="navigation">
        <NavList list={list} />
    </nav>
);

export default Navigation;
