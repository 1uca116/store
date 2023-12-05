import styles from './index.module.css';
import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Context } from '../../../index';
import { createDevice, fetchBrands, fetchTypes } from '../../../http/deviceApi';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({ showModal, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(10);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, [device]);

  const addInfo = (e) => {
    e.preventDefault();
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', 10);
    formData.append('img', file);
    formData.append('brandId', device.selectedBrand);
    formData.append('typeId', device.selectedType);
    formData.append('info', JSON.stringify(info));
    createDevice(formData).then(data => onHide());
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
            <select className={styles.input} name='types' id='types'
              onChange={e => device.setSelectedType(e.target.value)}
            >
              {device.types.map((type) => (
                <option
                  key={type.id}
                  value={type.id}
                >
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor='brands'>Choose brand:</label>
            <select className={styles.input} name='brands' id='brands'
              onChange={e => device.setSelectedBrand(e.target.value)}
            >
              {device.brands.map((brand) => (
                <option
                  key={brand.id}
                  value={brand.id}
                >
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={'Enter the device name'}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              className={styles.input}
              id='price'
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              type={'number'}
              placeholder={'Enter the price'}
            />
          </div>
          <div>
            <label>Add image</label>
            <input
              className={styles.input}
              id='file'
              onChange={selectFile}
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
              <input
                className={styles.input}
                value={i.title}
                onChange={(e) => changeInfo('title', e.target.value, i.number)}
                placeholder='Enter feature'
              />
              <input
                className={styles.input}
                value={i.description}
                onChange={(e) =>
                  changeInfo('description', e.target.value, i.number)
                }
                placeholder='Enter info'
              />
              <button
                className={styles.close}
                onClick={() => removeInfo(i.number)}
              >
                &times;
              </button>
            </div>
          ))}
        </form>
        <button className={styles.btn} id={'test2'} onClick={addDevice}>
          Submit
        </button>
      </div>
    </div>
  );
});

export default CreateDevice;
