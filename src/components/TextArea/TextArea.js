import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ name, id, className, cols, rows, ...props }) => (
    <textarea
        name={name}
        id={id}
        className={`${className} cursor-form`}
        rows={rows}
        cols={cols}
        placeholder=" "
        {...props}
    />
);

TextArea.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    rows: PropTypes.number,
    cols: PropTypes.number
};

export default TextArea;
