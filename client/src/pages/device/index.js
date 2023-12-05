import styles from './index.module.css';
import React from 'react';
import Container from '../../components/core/container';
import classNames from 'classnames';

const Device = () => {
  const device = {
    id: 2,
    name: 'Iphone 12 pro',
    price: 25000,
    rating: 5,
    img: 'https://www.tehnomedia.rs/image/71348.jpg?tip=webp&tip_slike=0',
  };
  const description = [
    { id: 1, title: 'Memory', description: '5Gb' },
    { id: 2, title: 'Camera', description: '12Mp' },
    { id: 3, title: 'Processor', description: 'Pentium 3' },
    { id: 4, title: 'Cores', description: '2' },
    { id: 5, title: 'Battery', description: '4000' },
  ];
  return (
    <Container className={styles.main}>
      <div className={classNames(styles.card, styles.general)}>
        <div className={styles.img_container}>
          <img src={device.img} width={400} alt={''} />
        </div>
        <div className={styles.main_info}>
          <div className={styles.name}>{device.name}</div>
          <div>Rating: {device.rating}/10</div>
        </div>
        <div className={styles.add_info}>
          <table>
            <tbody>
              <tr>
                <th>Feature</th>
                <th>Info</th>
              </tr>

              {description.map((info) => (
                <tr key={info.id}>
                  <td>{info.title}</td>
                  <td>{info.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
