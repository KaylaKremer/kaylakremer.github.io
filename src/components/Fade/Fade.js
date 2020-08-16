import React, { Component, createRef } from 'react';
import { Transition } from 'react-transition-group';
import { connect } from 'react-redux';
import gsap from 'gsap';
import PropTypes from 'prop-types';

const Fade = ({
    modal,
    timeout = 1000,
    duration = 0.5,
    ease = 'sine.in',
    component,
    children
}) => {
    let show;

    switch (component) {
        case 'modal':
            show = modal;
            break;
        default:
            break;
    }

    return (
        <Transition
            timeout={timeout}
            in={show}
            mountOnEnter
            unmountOnExit
            addEndListener={(node, done) => {
                if (show) {
                    gsap.from(node, {
                        duration,
                        autoAlpha: 0,
                        ease,
                        onComplete: done
                    });
                } else {
                    gsap.to(node, {
                        duration,
                        autoAlpha: 0,
                        ease,
                        onComplete: done
                    });
                }
            }}
        >
            {children}
        </Transition>
    );
};

// Can map state for different components here to be used with the "show" variable
const mapStateToProps = state => ({
    modal: state.contact.modal
});

Fade.propTypes = {
    modal: PropTypes.bool,
    component: PropTypes.string,
    timeout: PropTypes.number,
    duration: PropTypes.number,
    ease: PropTypes.string,
    children: PropTypes.node
};

export default connect(mapStateToProps, null)(Fade);
