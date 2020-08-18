import React from 'react';
import { connect } from 'react-redux';
import Icon from 'components/Icon/Icon';
import Fade from 'components/Fade/Fade';
import Modal from 'components/Modal/Modal';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';
import styles from './footer.module.scss';

const Footer = ({ showModal }) => {
    const socialMediaIcons = () => {
        const socialMedia = {
            github: 'https://github.com/KaylaKremer',
            ['linkedin-in']: 'https://www.linkedin.com/in/kaylakremer',
            twitter: 'https://twitter.com/Kayla_Kremer',
            instagram: 'https://www.instagram.com/kayla.kremer',
            email: 'mailto:kremer.kayla@gmail.com'
        };

        return Object.keys(socialMedia).map(key => {
            if (key !== 'email') {
                return (
                    <div
                        key={`${key === 'linkedin-in' ? 'linkedin' : key}`}
                        className={styles['social-media-icon-outer']}
                    >
                        <div className={styles['social-media-icon-inner']}>
                            <Icon
                                icon={['fab', key]}
                                className={styles['social-media-icon']}
                                link={socialMedia[key]}
                                title={`"${
                                    key === 'linkedin-in' ? 'linkedin' : key
                                }"`}
                            />
                        </div>
                    </div>
                );
            }
            return (
                <div
                    key={key}
                    className={styles['social-media-icon-outer']}
                    onClick={showModal}
                    onKeyPress={showModal}
                    role="button"
                    tabIndex="0"
                >
                    <div className={styles['social-media-icon-inner']}>
                        <Icon
                            icon="envelope"
                            className={styles['social-media-icon']}
                        />
                    </div>
                </div>
            );
        });
    };

    return (
        <footer className={styles.footer}>
            <Fade component="modal">
                <Modal />
            </Fade>
            <div className={`${styles['social-media']} cursor-footer`}>
                {socialMediaIcons()}
            </div>
            <span className={styles.copyright}>
                © 2020 Kayla Kremer. All rights reserved.
            </span>
        </footer>
    );
};

const mapDispatchToProps = {
    showModal: actions.showModal
};

Footer.propTypes = {
    showModal: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Footer);
