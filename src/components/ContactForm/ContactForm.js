import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Field from 'components/Field/Field';
import Button from 'components/Button/Button';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';
import styles from './contact-form.module.scss';

const ContactForm = ({ sendForm }) => (
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
        {({ errors, touched, getFieldProps, resetForm }) => (
            <Form className={styles['contact-form']}>
                <Field
                    error={errors.name}
                    touched={touched.name}
                    id="name"
                    name="name"
                    type="text"
                    {...getFieldProps('name')}
                />

                <Field
                    error={errors.email}
                    touched={touched.email}
                    id="email"
                    name="email"
                    type="text"
                    {...getFieldProps('email')}
                />

                <Field
                    error={errors.subject}
                    touched={touched.subject}
                    id="subject"
                    name="subject"
                    type="text"
                    {...getFieldProps('subject')}
                />

                <Field
                    error={errors.message}
                    touched={touched.message}
                    id="message"
                    name="message"
                    type="textarea"
                    {...getFieldProps('message')}
                />
                <div className={styles.buttons}>
                    <Button type="reset" color="black" onClick={resetForm}>
                        Reset
                    </Button>
                    <Button type="submit" color="black">
                        Send Email
                    </Button>
                </div>
            </Form>
        )}
    </Formik>
);

const mapDispatchToProps = {
    sendForm: actions.sendForm
};

ContactForm.propTypes = {
    sendForm: PropTypes.func
};

export default connect(null, mapDispatchToProps)(ContactForm);
