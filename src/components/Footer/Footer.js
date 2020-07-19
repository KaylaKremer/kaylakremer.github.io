import React from 'react';
import Icon from 'components/Icon/Icon';
import styles from './footer.module.scss';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles['social-media']}>
            <Icon
                icon={['fab', 'github']}
                size="2x"
                className={styles['social-media-icon']}
                link="https://github.com/KaylaKremer"
            />
            <Icon
                icon={['fab', 'linkedin-in']}
                size="2x"
                className={styles['social-media-icon']}
            />
            <Icon
                icon={['fab', 'twitter']}
                size="2x"
                className={styles['social-media-icon']}
            />
            <Icon
                icon={['fab', 'instagram']}
                size="2x"
                className={styles['social-media-icon']}
            />
            <Icon
                icon="envelope"
                size="2x"
                className={styles['social-media-icon']}
            />
        </div>
        <span className={styles.copyright}>
            © 2020 Kayla Kremer. All rights reserved.
        </span>
    </footer>
);

export default Footer;
