import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

class Button extends Component {
    state = {
        hover: false
    };

    toggleHover = () => {
        this.setState(prevState => ({
            hover: !prevState.hover
        }));
    };

    render() {
        const {
            type,
            color,
            icon = null,
            onClick = null,
            ariaLabel = null,
            children
        } = this.props;
        const { hover } = this.state;
        return (
            <button
                type={type}
                className={`
                    ${icon ? styles[`${icon}`] : styles.button} 
                    ${styles[`button-${color}`]}
                    ${type === 'submit' ? styles.submit : ''} 
                    ${type === 'reset' ? styles.reset : ''} 
                    cursor-button
                `}
                onClick={onClick}
                aria-label={ariaLabel}
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}
                onFocus={this.play}
                onBlur={this.pause}
            >
                <div
                    className={`${styles.border} ${styles.border1} ${
                        hover ? `${styles.play1}` : `${styles.pause}`
                    }`}
                />
                <div
                    className={`${styles.border} ${styles.border2} ${
                        hover ? `${styles.play2}` : `${styles.pause}`
                    }`}
                />
                <div
                    className={`${styles.border} ${styles.border3} ${
                        hover ? `${styles.play3}` : `${styles.pause}`
                    }`}
                />
                <div
                    className={`${styles.border} ${styles.border4} ${
                        hover ? `${styles.play4}` : `${styles.pause}`
                    }`}
                />
                {children}
            </button>
        );
    }
}

Button.prototypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.string,
    ariaLabel: PropTypes.string,
    children: PropTypes.node
};

export default Button;
