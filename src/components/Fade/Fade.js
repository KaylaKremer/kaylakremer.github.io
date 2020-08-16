import React, { Component, createRef } from 'react';
import { Transition } from 'react-transition-group';
import { connect } from 'react-redux';
import gsap from 'gsap';

const Fade = ({ modal, children }) => (
    <Transition
        timeout={1000}
        in={modal}
        mountOnEnter
        unmountOnExit
        addEndListener={(node, done) => {
            if (modal) {
                gsap.from(node, {
                    autoAlpha: 0,
                    ease: 'sine.in',
                    duration: 0.5,
                    onComplete: done
                });
            } else {
                gsap.to(node, {
                    autoAlpha: 0,
                    ease: 'sine.out',
                    duration: 0.5,
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

export default connect(mapStateToProps, null)(Fade);
