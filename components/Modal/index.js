import React from 'react';
import styles from './style.module.scss';
import Container from "../Container";
import CloseIcon from '/public/icons/icon-close.svg';
import cn from "classnames";

const Modal = ({ title='', open, onClose, children }) => {
    return (
        <div className={cn(styles.modal, {
            [styles.open]: open,
            [styles.close]: !open,
        })}
             onClick={onClose}
        >
            <Container className={styles.container}>
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
