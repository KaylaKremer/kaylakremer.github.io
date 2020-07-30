import React from 'react';
import Label from 'components/Label/Label';
import Tooltip from 'components/Tooltip/Tooltip';
import Input from 'components/Input/Input';
import PropTypes from 'prop-types';
import styles from './field.module.scss';

const Field = ({ error, touched, id, name, type, ...fieldProps }) => (
    <div className={styles.field}>
        <div className={styles.label}>
            <Label label={name} error={error} touched={touched} />
            {error && touched && <Tooltip direction="right" tooltip={error} />}
        </div>
        <Input
            classNames={[]}
            name={name}
            id={id}
            type={type}
            {...fieldProps}
        />
    </div>
);

Field.propTypes = {
    error: PropTypes.string,
    touched: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string
};

export default Field;
