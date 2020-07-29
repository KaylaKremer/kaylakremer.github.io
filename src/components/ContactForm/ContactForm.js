import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'components/Button/Button';
import Tooltip from 'components/Tooltip/Tooltip';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';
import styles from './contact-form.module.scss';

const ContactForm = ({ sendForm }) => {
    return (
        <Formik
            initialValues={{ name: '', email: '', subject: '', message: '' }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(50, 'Must be 50 characters or less')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                subject: Yup.string()
                    .max(50, 'Must be 50 characters or less')
                    .required('Required'),
                message: Yup.string()
                    .max(5000, 'Must be 5000 characters or less')
                    .required('Required')
            })}
            onSubmit={values => sendForm(values)}
        >
            {({ errors }) => (
                <Form className={styles['contact-form']}>
                    <div className={styles.section}>
                        <div className={styles['label-tooltip']}>
                            <label
                                className={styles.label}
                                htmlFor="name"
                                aria-label="name"
                            >
                                Name
                            </label>
                            <Tooltip
                                className="tooltip-right"
                                tooltip={errors.name}
                            />
                        </div>
                        <Field
                            className={styles.field}
                            name="name"
                            id="name"
                            type="text"
                        />
                    </div>

                    <div className={styles.section}>
                        <label className={styles.label} htmlFor="email">
                            Email Address
                        </label>
                        <Tooltip
                            className="tooltip-right"
                            tooltip={errors.email}
                        />
                        <Field
                            className={styles.field}
                            name="email"
                            id="email"
                            type="email"
                        />
                    </div>

                    <div className={styles.section}>
                        <label className={styles.label} htmlFor="subject">
                            Subject
                        </label>
                        <Tooltip
                            className="tooltip-right"
                            tooltip={errors.subject}
                        />
                        <Field
                            className={styles.field}
                            name="subject"
                            id="subject"
                            type="text"
                        />
                    </div>

                    <div className={styles.section}>
                        <label className={styles.label} htmlFor="message">
                            Message
                        </label>
                        <Tooltip
                            className="tooltip-right"
                            tooltip={errors.message}
                        />
                        <Field
                            className={styles.field}
                            name="message"
                            id="message"
                            as="textarea"
                            rows="10"
                        />
                    </div>

                    <Button className={styles.submit} type="submit">
                        Send Email
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

const mapDispatchToProps = {
    sendForm: actions.sendForm
};

ContactForm.propTypes = {
    sendForm: PropTypes.func
};

export default connect(null, mapDispatchToProps)(ContactForm);
