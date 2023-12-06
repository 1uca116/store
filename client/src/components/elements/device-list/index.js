import React, { useContext } from 'react';
import styles from '../device-list/index.module.css';
import { Context } from '../../../index';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../../../utils/consts';
import { observer } from 'mobx-react-lite';
import Card from '../../core/card';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { FaHeart } from 'react-icons/fa';

const DeviceItem = ({ device }) => {
  const history = useNavigate();

  return (
    <Card className={styles.card}>
      <div className={styles.section_img}>
        <div className={styles.quick_actions}>
          <RxOpenInNewWindow
            className={styles.icon}
            onClick={() => history(DEVICE_ROUTE + '/' + device.id)}
          />
          <FaHeart className={styles.heart} />
        </div>
        <div className={styles.img_container}>
          <img
            src={process.env.REACT_APP_API_URL + device.img}
            className={styles.img}
            alt={''}
          />
        </div>
      </div>
      <div className={styles.section_info}>
        <div className={styles.quick_actions}>
          <div className={styles.type_tag}>Phones</div>
          <div className={styles.add}>+</div>
        </div>
        <div className={styles.main_info}>
          <div className={styles.title}>{device.name}</div>
          <div className={styles.price}>{device.price} $</div>
        </div>
      </div>
    </Card>
  );
};

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  return (
    <div className={styles.cards_list}>
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </div>
  );
});

export default DeviceList;
