import React, { Component, createRef } from 'react';
import CustomCursor from 'utils/customCursor';
import PropTypes from 'prop-types';
import styles from './cursor.module.scss';

class Cursor extends Component {
    cursorRef = createRef();

    circleRef = createRef();

    dotRef = createRef();

    cursor = null;

    componentDidMount() {
        this.createCustomCursor();
    }

    createCustomCursor = () => {
        return new CustomCursor(
            this.cursorRef.current,
            this.circleRef.current,
            this.dotRef.current
        );
    };

    render() {
        return (
            <div className={styles.cursor} ref={this.cursorRef}>
                <div
                    className={`${styles['cursor-inner']} ${styles['cursor-triangle']}`}
                    ref={this.circleRef}
                />
                <div
                    className={`${styles['cursor-inner']} ${styles['cursor-triangle-dot']}`}
                    ref={this.dotRef}
                />
            </div>
        );
    }
}

export default Cursor;
