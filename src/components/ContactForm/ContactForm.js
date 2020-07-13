import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'components/Button/Button';
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
            <Form className={styles['contact-form']}>
                <div className={styles.section}>
                    <label
                        className={styles.label}
                        htmlFor="name"
                        aria-label="name"
                    >
                        Name
                    </label>
                    <Field
                        className={styles.field}
                        name="name"
                        id="name"
                        type="text"
                    />
                    <ErrorMessage className={styles.error} name="name" />
                </div>

                <div className={styles.section}>
                    <label className={styles.label} htmlFor="email">
                        Email Address
                    </label>
                    <Field
                        className={styles.field}
                        name="email"
                        id="email"
                        type="email"
                    />
                    <ErrorMessage className={styles.error} name="email" />
                </div>

                <div className={styles.section}>
                    <label className={styles.label} htmlFor="subject">
                        Subject
                    </label>
                    <Field
                        className={styles.field}
                        name="subject"
                        id="subject"
                        type="text"
                    />
                    <ErrorMessage className={styles.error} name="subject" />
                </div>

                <div className={styles.section}>
                    <label className={styles.label} htmlFor="message">
                        Message
                    </label>
                    <Field
                        className={styles.field}
                        name="message"
                        id="message"
                        as="textarea"
                        rows="10"
                    />
                    <ErrorMessage className={styles.error} name="message" />
                </div>

                <Button type="submit">Submit</Button>
            </Form>
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
