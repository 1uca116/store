import styles from './index.module.css';
import React, { useEffect, useState } from 'react';
import Container from '../../components/core/container';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../../http/deviceApi';
import Card from "../../components/core/card";
import Button from "../../components/core/button";

const Device = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, [id]);

  return (
    <Container className={styles.main}>
      <Card className={classNames(styles.card, styles.general)}>
        <div className={styles.img_container}>
          <img
            src={process.env.REACT_APP_API_URL + device.img}
            width={400}
            alt={''}
          />
        </div>
        <div className={styles.main_info}>
          <div className={styles.name}>{device.name}</div>
          <div>Rating: {device.rating}/10</div>
        </div>
        <div className={styles.add_info}>
          {device.info.length ? (
              <div className={styles.card_info}>
                <div className={styles.thead}>
                  <p className={styles.thead_item}>Feature</p>
                  <p className={styles.thead_item}>Info</p>
                </div>
                {device.info.map((info) => (
                    <div key={info.id} className={styles.content}>
                      <p className={styles.thead_item}>{info.title}</p>
                      <p className={styles.thead_item}>{info.description}</p>
                    </div>
                ))}
              </div>

          ) : (
            ''
          )}
        </div>
      </Card>
      <Card className={classNames(styles.card, styles.actions)}>
        <div className={styles.price}>Price : {device.price} $</div>
        <Button className={styles.btn}>Add to cart</Button>
      </Card>
    </Container>
  );
};

export default Device;
