import styles from './index.module.css';
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { Context } from '../../../index';

const CreateDevice = ({ showModal, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);
  const addInfo = (e) => {
    e.preventDefault();
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
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
          <div>
            <label htmlFor='types'>Choose type:</label>
            <select className={styles.input} name='types' id='types'>
              {device.types.map((type) => (
                <option key={type.id} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor='brands'>Choose brand:</label>
            <select className={styles.input} name='brands' id='brands'>
              {device.brands.map((brand) => (
                <option key={brand.id} value={brand.name}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Name</label>
            <input
              className={styles.input}
              id='name'
              placeholder={'Enter the device name'}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              className={styles.input}
              id='price'
              type={'number'}
              placeholder={'Enter the price'}
            />
          </div>
          <div>
            <label>Add image</label>
            <input
              className={styles.input}
              id='file'
              type={'file'}
              placeholder={'Enter the device name'}
            />
          </div>
          <button
            onClick={addInfo}
            className={styles.btn_secondary}
            id={'test'}
          >
            Add description
          </button>

          {info.map((i) => (
            <div key={i.number} className={styles.additional_form}>
              <input className={styles.input} placeholder='Enter feature' />
              <input className={styles.input} placeholder='Enter info' />
              <button
                className={styles.close}
                onClick={() => removeInfo(i.number)}
              >
                &times;
              </button>
            </div>
          ))}
        </form>
        <button className={styles.btn} id={'test2'}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateDevice;
