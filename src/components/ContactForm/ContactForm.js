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
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    sendForm();
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form className={styles['contact-form']}>
                <label htmlFor="name" aria-label="name">
                    Name
                </label>
                <Field name="name" id="name" type="text" />
                <ErrorMessage name="name" />
                <label htmlFor="email">Email Address</label>
                <Field name="email" id="email" type="email" />
                <ErrorMessage name="email" />
                <label htmlFor="subject">Subject</label>
                <Field name="subject" id="subject" type="text" />
                <ErrorMessage name="subject" />
                <label htmlFor="message">Message</label>
                <Field name="message" id="message" as="textarea" />
                <ErrorMessage name="message" />
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
