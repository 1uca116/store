import styles from './index.module.css';
import React, { useState } from 'react';
import classNames from 'classnames';
import { createType } from '../../../http/deviceApi';
import Button from '../../core/button';

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
        <Button variant={'tertiary'} onClick={onHide} className={styles.close}>
          &times;
        </Button>

        <form className={styles.form}>
          <input
            className={styles.input}
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder={'Enter the type'}
          />
          <Button variant={'primary'} onClick={addType}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateType;
