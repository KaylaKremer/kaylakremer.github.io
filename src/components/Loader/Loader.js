import React, { Component, createRef } from 'react';
import gsap from 'gsap';
import styles from './loader.module.scss';

class Loader extends Component {
    lRef = createRef();

    oRef = createRef();

    aRef = createRef();

    dRef = createRef();

    iRef = createRef();

    nRef = createRef();

    gRef = createRef();

    componentDidMount() {
        gsap.to(
            [
                this.lRef.current,
                this.oRef.current,
                this.aRef.current,
                this.dRef.current,
                this.iRef.current,
                this.nRef.current,
                this.gRef.current
            ],
            {
                scale: 0,
                yoyo: true,
                repeat: -1,
                repeatDelay: 0.3,
                stagger: {
                    each: 0.15
                },
                ease: 'bounce.out'
            }
        );
    }

    render() {
        return (
            <div className={styles.loader}>
                <div className={styles['triangle-wrapper']}>
                    <div className={`${styles.triangle} ${styles.invert}`} />
                    <div className={`${styles.triangle} ${styles.invert}`} />
                    <div className={styles.triangle} />
                    <div className={`${styles.triangle} ${styles.invert}`} />
                    <div className={`${styles.triangle} ${styles.invert}`} />
                    <div className={styles.triangle} />
                    <div className={`${styles.triangle} ${styles.invert}`} />
                    <div className={styles.triangle} />
                    <div className={`${styles.triangle} ${styles.invert}`} />
                </div>
                <div className={styles.text}>
                    <div ref={this.lRef}>L</div>
                    <div ref={this.oRef}>O</div>
                    <div ref={this.aRef}>A</div>
                    <div ref={this.dRef}>D</div>
                    <div ref={this.iRef}>I</div>
                    <div ref={this.nRef}>N</div>
                    <div ref={this.gRef}>G</div>
                </div>
            </div>
        );
    }
}
export default Loader;
