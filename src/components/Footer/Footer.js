import React from 'react';
import Fade from 'components/Fade/Fade';
import Modal from 'components/Modal/Modal';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Fade component="modal">
                <Modal />
            </Fade>
            <div className={`${styles['social-media']} cursor-footer`}>
                <SocialMedia />
            </div>
            <span className={styles.copyright}>
                © 2020 Kayla Kremer. All rights reserved.
            </span>
        </footer>
    );
};

export default Footer;
