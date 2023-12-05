import styles from './index.module.css';
import React from 'react';
import Container from '../container';

const Spinner = () => {
  return (
    <Container className={styles.main}>
      <span className={styles.ping}>
        <span className={styles.first_layer}></span>
        <span className={styles.second_layer}></span>
      </span>
    </Container>
  );
};

export default Spinner;
