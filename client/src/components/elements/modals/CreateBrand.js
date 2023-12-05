import styles from './index.module.css';
import React, { useState } from 'react';
import classNames from 'classnames';
import { createBrand } from '../../../http/deviceApi';

const CreateBrand = ({ showModal, onHide }) => {
  const [brand, setBrand] = useState('');

  const addBrand = () => {
    createBrand({ name: brand }).then((data) => setBrand(''));
    onHide()
  };

  return (
    <div
      className={classNames(styles.modal, {
        [styles.visible]: showModal === true,
      })}
    >
      <div className={styles.modal_content}>
        <div className={styles.close} onClick={onHide}>
          &times;
        </div>
        <form className={styles.form}>
          <input
            className={styles.input}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder={'Enter the brand'}
          />
          <button className={styles.btn} onClick={addBrand}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBrand;
