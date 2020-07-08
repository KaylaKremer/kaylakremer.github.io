import React from 'react';
import PropTypes from 'prop-types';
import NavItem from 'components/Navigation/NavItem/NavItem';
import styles from './nav-list.module.scss';

const createNavItems = list =>
    list.map((item, index) => (
        <NavItem
            key={`nav-item-${index}`}
            link={item.link}
            exact={item.exact}
            content={item.content}
        />
    ));

const NavList = ({ list }) => (
    <ul className={styles['nav-list']}>{createNavItems(list)}</ul>
);

NavList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string,
            exact: PropTypes.bool,
            content: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
        })
    )
};

export default NavList;
