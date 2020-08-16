import React, { Component, createRef } from 'react';
import { Transition } from 'react-transition-group';
import { connect } from 'react-redux';
import gsap from 'gsap';

class Fade extends Component {
    fadeRef = createRef();

    // componentDidMount() {
    //     gsap.from(this.fadeRef.current, {
    //         autoAlpha: 0,
    //         ease: 'sine.in',
    //         duration: 0.5
    //     });
    // }

    render() {
        // const { children } = this.props;
        // return <div ref={this.fadeRef}>{children}</div>;
        const { modal, children } = this.props;

        return (
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
                <div className="test">{children}</div>
            </Transition>
        );
    }
}

const mapStateToProps = state => ({
    modal: state.contact.modal
});

export default connect(mapStateToProps, null)(Fade);
