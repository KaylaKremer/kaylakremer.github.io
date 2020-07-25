import React from 'react';
import Icon from 'components/Icon/Icon';
import styles from './footer.module.scss';

const Footer = () => {
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
                    <Icon
                        key={`${key === 'linkedin-in' ? 'linkedin' : key}`}
                        icon={['fab', key]}
                        size="2x"
                        className={styles['social-media-icon']}
                        link={socialMedia[key]}
                        title={`"${key === 'linkedin-in' ? 'linkedin' : key}"`}
                    />
                );
            }
            return (
                <Icon
                    key={key}
                    icon="envelope"
                    size="2x"
                    className={styles['social-media-icon']}
                    link={socialMedia[key]}
                />
            );
        });
    };

    return (
        <footer className={styles.footer}>
            <div className={`${styles['social-media']} cursor`}>
                {socialMediaIcons()}
            </div>
            <span className={styles.copyright}>
                © 2020 Kayla Kremer. All rights reserved.
            </span>
        </footer>
    );
};

export default Footer;
