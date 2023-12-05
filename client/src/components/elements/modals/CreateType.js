import styles from './index.module.css';
import React, { useState } from 'react';
import classNames from 'classnames';
import { createType } from '../../../http/deviceApi';

const CreateType = ({ showModal, onHide }) => {
  const [type, setType] = useState('');

  const addType = () => {
    createType({ name: type }).then((data) => setType(''));
    onHide();
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
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder={'Enter the type'}
          />
          <button className={styles.btn} onClick={addType}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateType;
