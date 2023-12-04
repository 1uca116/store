import styles from './index.module.css';
import React from 'react';
import Container from "../../components/core/container";

const Device = () => {
    return (
        <Container>
            <div className={styles.main}>
                <div className={styles.info}>

                </div>
                <div className={styles.actions}>

                </div>
            </div>
        </Container>
    );
};

export default Device;
