import React from 'react';
import NavList from 'components/Navigation/NavList/NavList';
import styles from './navigation.module.scss';

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
    <nav className={`${styles.navigation} cursor`}>
        <NavList list={list} />
    </nav>
);

export default Navigation;
