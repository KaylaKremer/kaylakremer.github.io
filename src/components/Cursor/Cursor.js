import React, { Component, createRef } from 'react';
import CustomCursor from 'utils/customCursor';
import PropTypes from 'prop-types';
import styles from './cursor.module.scss';

class Cursor extends Component {
    cursorRef = createRef();

    triangleRef = createRef();

    triangleDotRef = createRef();

    cursor = null;

    componentDidMount() {
        this.createCustomCursor();
    }

    createCustomCursor = () => {
        return new CustomCursor(
            this.cursorRef.current,
            this.triangleRef.current,
            this.triangleDotRef.current
        );
    };

    render() {
        return (
            <div className={styles.cursor} ref={this.cursorRef}>
                <div
                    className={`${styles['cursor-inner']} ${styles['cursor-triangle']}`}
                    ref={this.triangleRef}
                />
                <div
                    className={`${styles['cursor-inner']} ${styles['cursor-triangle-dot']}`}
                    ref={this.triangleDotRef}
                />
            </div>
        );
    }
}

export default Cursor;
