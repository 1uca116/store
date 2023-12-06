import styles from './index.module.css';
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../index';

const Pagination = observer(() => {
  const { device } = useContext(Context);
  const pageCount = Math.ceil(device.totalCount / device.limit);
  const pages = [];

  for (let x = 0; x < pageCount; x++) {
    pages.push(x + 1);
  }
  return (
    <div>
      <div className={styles.pagination}>
        {pages.map((page) => (
          <button key={page.id} onClick={() => device.setPage(page)}>{page}</button>
        ))}
      </div>
    </div>
  );
});

export default Pagination;
