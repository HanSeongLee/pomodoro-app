import React from 'react';
import styles from './style.module.scss';
import Container from "../Container";
import CloseIcon from '/public/icons/icon-close.svg';

const Modal = ({ title='', onClose, children }) => {
    return (
        <div className={styles.modal}>
            <Container className={styles.container}
                       onClick={onClose}
            >
                <div className={styles.modalBox}
                     onClick={e => e.stopPropagation()}
                >
                    <div className={styles.header}>
                        <div className={styles.title}>
                            {title}
                        </div>
                        <button className={styles.closeButton}
                                aria-label={'close'}
                                onClick={onClose}
                        >
                            <CloseIcon />
                        </button>
                    </div>
                    <div className={styles.body}>
                        {children}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Modal;
