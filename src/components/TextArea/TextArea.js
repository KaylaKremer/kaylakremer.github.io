import React from 'react';
import PropTypes from 'prop-types';
import styles from './textarea.module.scss';

const TextArea = ({ name, id, classNames, cols, rows, ...props }) => (
    <textarea
        name={name}
        id={id}
        className={`${styles.textarea} ${classNames.map(
            className => styles[`${className}`]
        )}`}
        rows={rows}
        cols={cols}
        {...props}
    />
);

TextArea.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string),
    rows: PropTypes.number,
    cols: PropTypes.number
};

export default TextArea;
