import styles from './index.module.css';
import React from 'react';
import Container from '../../components/core/container';
import TypeBar from '../../components/elements/typebar';
import BrandBar from '../../components/elements/brandbar';
import DeviceList from '../../components/elements/device-list';

const Shop = () => {
  return (
    <Container className={styles.main}>
      <div className={styles.section_filter}>
        <TypeBar />
      </div>
      <div className={styles.section_cards}>
        <BrandBar />
        <DeviceList />
      </div>
    </Container>
  );
};

export default Shop;
