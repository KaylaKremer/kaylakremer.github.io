import React, { Component, createRef } from 'react';
import CustomCursor from 'utils/customCursor';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './cursor.module.scss';

class Cursor extends Component {
    cursorRef = createRef();

    outerTriangleRef = createRef();

    innerTriangleRef = createRef();

    cursor = null;

    componentDidMount() {
        this.cursor = this.createCustomCursor();
        return this.cursor;
    }

    componentDidUpdate(prevProps) {
        const {
            location: { pathname },
            modal
        } = this.props;
        if (
            prevProps.location.pathname !== pathname ||
            prevProps.modal !== modal
        ) {
            this.cursor.initHovers();
        }
    }

    createCustomCursor = () => {
        return new CustomCursor(
            this.cursorRef.current,
            this.outerTriangleRef.current,
            this.innerTriangleRef.current
        );
    };

    render() {
        return (
            <div className={styles.cursor} ref={this.cursorRef}>
                <div
                    className={`${styles['cursor-triangle']} ${styles['cursor-outer-triangle']}`}
                    ref={this.outerTriangleRef}
                />
                <div
                    className={`${styles['cursor-triangle']} ${styles['cursor-inner-triangle']}`}
                    ref={this.innerTriangleRef}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    modal: state.contact.modal
});

Cursor.propTypes = {
    modal: PropTypes.bool,
    location: PropTypes.shape({
        hash: PropTypes.string,
        pathname: PropTypes.string,
        search: PropTypes.string,
        state: PropTypes.string
    })
};

export default connect(mapStateToProps, null)(withRouter(Cursor));
