import React, { useContext } from 'react';
import styles from '../device-list/index.module.css';
import { Context } from '../../../index';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../../../utils/consts';

const DeviceItem = ({ device }) => {
  const history = useNavigate();
  return (
    <div
      onClick={() => history(DEVICE_ROUTE + '/' + device.id)}
      className={styles.card}
    >
      <div className={styles.main_info}>
        <h2 className={styles.title}>{device.name}</h2>
        <p className={styles.price}>{device.price}</p>
      </div>
      <div>{device.rating}/10</div>
      <div className={styles.img_container}>
        <img src={device.img} alt={''} className={styles.img} />
      </div>
    </div>
  );
};
const DeviceList = () => {
  const { device } = useContext(Context);

  return (
    <div className={styles.cards_list}>
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </div>
  );
};

export default DeviceList;
