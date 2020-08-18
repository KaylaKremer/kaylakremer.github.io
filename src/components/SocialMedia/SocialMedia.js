import React from 'react';
import { connect } from 'react-redux';
import Icon from 'components/Icon/Icon';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';
import styles from './social-media.module.scss';

const SocialMedia = ({ showModal }) => {
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

const mapDispatchToProps = {
    showModal: actions.showModal
};

SocialMedia.propTypes = {
    showModal: PropTypes.func
};

export default connect(null, mapDispatchToProps)(SocialMedia);
