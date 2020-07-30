import React from 'react';
import Label from 'components/Label/Label';
import Tooltip from 'components/Tooltip/Tooltip';
import Input from 'components/Input/Input';
import PropTypes from 'prop-types';
import styles from './field.module.scss';

const Field = ({ error, touched, name, id, ...fieldProps }) => (
    <>
        <div className={styles.field}>
            <Label label="name" error={error} touched={touched} />
            {error && touched && <Tooltip direction="right" tooltip={error} />}
        </div>
        <Input
            classNames={[]}
            name={name}
            id={id}
            type="text"
            {...fieldProps}
        />
    </>
);

Field.propTypes = {
    error: PropTypes.string,
    touched: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.string
};

export default Field;
