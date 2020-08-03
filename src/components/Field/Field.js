import React from 'react';
import Label from 'components/Label/Label';
import Tooltip from 'components/Tooltip/Tooltip';
import Input from 'components/Input/Input';
import TextArea from 'components/TextArea/TextArea';
import PropTypes from 'prop-types';
import './field.scss';

const Field = ({
    error,
    touched,
    id,
    name,
    type,
    cols = 20,
    rows = 10,
    ...fieldProps
}) => (
    <div className="field">
        {type !== 'textarea' ? (
            <Input
                name={name}
                id={id}
                type={type}
                className="input"
                {...fieldProps}
            />
        ) : (
            <TextArea
                name={name}
                id={id}
                cols={cols}
                rows={rows}
                className="textarea"
                {...fieldProps}
            />
        )}
        <div className="label-container">
            <Label
                label={name}
                error={error}
                touched={touched}
                className="label"
            />
            {error && touched && (
                <div className="tooltip-container">
                    <Tooltip className="tooltip left" tooltip={error} />
                </div>
            )}
        </div>
    </div>
);

Field.propTypes = {
    error: PropTypes.string,
    touched: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    rows: PropTypes.number,
    cols: PropTypes.number
};

export default Field;
