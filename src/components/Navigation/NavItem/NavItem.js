import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './nav-item.module.scss';

const NavItem = ({ link, exact, content }) => (
    <li className={styles['nav-item']}>
        <NavLink to={link} exact={exact} activeClassName={styles.active}>
            {content}
        </NavLink>
    </li>
);

NavItem.propTypes = {
    link: PropTypes.string,
    exact: PropTypes.bool,
    content: PropTypes.node
};

export default NavItem;
