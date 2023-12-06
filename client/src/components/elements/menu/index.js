import styles from './index.module.css';
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../index';
import classNames from 'classnames';
import Accordion from '../../core/accordion';

const Menu = observer(() => {
  const { device } = useContext(Context);

  const menuData = [
    {
      title: 'Types',
      content: (
        <div>
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
      ),
    },
    {
      title: 'Brands',
      content: (
        <div>
          {device.brands.map((brand) => (
            <div
              key={brand.id}
              onClick={() => device.setSelectedBrand(brand)}
              className={classNames(styles.list_item, {
                [styles.list_item_active]:
                  brand.id === device.selectedBrand.id,
              })}
            >
              {brand.name}
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className={styles.main}>
      {menuData.map(({ title, content }) => (
        <Accordion key={title} title={title} content={content} />
      ))}
    </div>
  );
});

export default Menu;
