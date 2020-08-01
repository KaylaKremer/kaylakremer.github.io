import React from 'react';
import Label from 'components/Label/Label';
import Tooltip from 'components/Tooltip/Tooltip';
import Input from 'components/Input/Input';
import TextArea from 'components/TextArea/TextArea';
import PropTypes from 'prop-types';
import styles from './field.module.scss';

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
    <div className={styles.field}>
        <div className={styles.label}>
            <Label label={name} error={error} touched={touched} />
            {error && touched && <Tooltip direction="right" tooltip={error} />}
        </div>
        {type !== 'textarea' ? (
            <Input
                classNames={[]}
                name={name}
                id={id}
                type={type}
                {...fieldProps}
            />
        ) : (
            <TextArea
                classNames={[]}
                name={name}
                id={id}
                cols={cols}
                rows={rows}
                {...fieldProps}
            />
        )}
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
