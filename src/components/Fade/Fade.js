import React, { Component, createRef } from 'react';
import gsap from 'gsap';

class Fade extends Component {
    fade = createRef();

    componentDidMount() {
        gsap.from(this.fade.current, {
            autoAlpha: 0,
            ease: 'sine.in',
            duration: 0.5
        });
    }

    render() {
        const { children } = this.props;
        return <div ref={this.fade}>{children}</div>;
    }
}

export default Fade;
