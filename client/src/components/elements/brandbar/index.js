import styles from './index.module.css';
import React, { useContext } from 'react';
import { Context } from '../../../index';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <div className={styles.list}>
      {device.brands.map((brand) => (
        <div
          key={brand.id}
          onClick={() => device.setSelectedBrand(brand)}
          className={classNames(styles.list_item, {
            [styles.list_item_selected]: brand.id === device.selectedBrand.id,
          })}
        >
          {brand.name}
        </div>
      ))}
    </div>
  );
});

export default BrandBar;
