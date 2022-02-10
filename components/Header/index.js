import React from "react";
import styles from './style.module.scss';
import Logo from "../Logo";
import Container from "../Container";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <h1 className={styles.logo}>
                    <Logo/>
                </h1>
            </Container>
        </header>
    );
};

export default Header;
