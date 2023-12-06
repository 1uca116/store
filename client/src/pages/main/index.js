import styles from './index.module.css';
import React, { useEffect, useState } from 'react';
import Container from '../../components/core/container';
import promoLg from '../../assets/jpg/promo-lg.jpg';
import promoSm from '../../assets/jpg/promo-sm.jpg';
import { BsLightningChargeFill } from 'react-icons/bs';
import Card from '../../components/core/card';

const Main = () => {
  return (
    <Container className={styles.main}>
      <img src={promoLg} alt='promo-lg' className={styles.promo_lg} />
      <img src={promoSm} alt='promo-sm' className={styles.promo_sm} />
      <div className={styles.info}>
        <Card className={styles.card}>
          <div className={styles.trending}>
            <BsLightningChargeFill className={styles.lightning} />
            <span>Trending now</span>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default Main;
