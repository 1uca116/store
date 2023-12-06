import styles from './index.module.css';
import React, { useState } from 'react';
import classNames from 'classnames';
import { createBrand } from '../../../http/deviceApi';
import Button from '../../core/button';

const CreateBrand = ({ showModal, onHide }) => {
  const [brand, setBrand] = useState('');

  const addBrand = () => {
    createBrand({ name: brand }).then((data) => setBrand(''));
    onHide();
  };

  return (
    <div
      className={classNames(styles.modal, {
        [styles.visible]: showModal === true,
      })}
    >
      <div className={styles.modal_content}>
        <Button variant={'tertiary'} onClick={onHide} className={styles.close}>
          &times;
        </Button>

        <form className={styles.form}>
          <input
            className={styles.input}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder={'Enter the brand'}
          />
          <Button variant={'primary'} onClick={addBrand}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateBrand;
