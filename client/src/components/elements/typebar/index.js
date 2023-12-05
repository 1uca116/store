import styles from './index.module.css';
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../index';
import classNames from 'classnames';

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className={styles.list}>
      {device.types.map((type) => (
        <div
          key={type.id}
          className={classNames(styles.list_item, {
            [styles.list_item_active]: type.id === device.selectedType.id,
          })}
          onClick={() => device.setSelectedType(type)}
        >
          {type.name}
        </div>
      ))}
    </div>
  );
});

export default TypeBar;
