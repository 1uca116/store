import styles from './index.module.css';
import React, { useEffect, useState } from 'react';
import Container from '../../components/core/container';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../../http/deviceApi';

const Device = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, [id]);

  return (
    <Container className={styles.main}>
      <div className={classNames(styles.card, styles.general)}>
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
            <table>
              <tbody>
                <tr>
                  <th>Feature</th>
                  <th>Info</th>
                </tr>

                {device.info.map((info) => (
                  <tr key={info.id}>
                    <td>{info.title}</td>
                    <td>{info.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className={classNames(styles.card, styles.actions)}>
        <div>Price : {device.price} rub</div>
        <button className={styles.btn}>Add to cart</button>
      </div>
    </Container>
  );
};

export default Device;
