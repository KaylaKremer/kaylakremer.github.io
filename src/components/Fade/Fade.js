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
    children
}) => (
    <Transition
        timeout={timeout}
        in={modal}
        mountOnEnter
        unmountOnExit
        addEndListener={(node, done) => {
            if (modal) {
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

const mapStateToProps = state => ({
    modal: state.contact.modal
});

Fade.propTypes = {
    modal: PropTypes.bool,
    timeout: PropTypes.number,
    duration: PropTypes.number,
    ease: PropTypes.string,
    children: PropTypes.node
};

export default connect(mapStateToProps, null)(Fade);
