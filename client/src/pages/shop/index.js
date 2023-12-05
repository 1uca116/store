import styles from './index.module.css';
import React, { useContext, useEffect } from 'react';
import Container from '../../components/core/container';
import TypeBar from '../../components/elements/typebar';
import BrandBar from '../../components/elements/brandbar';
import DeviceList from '../../components/elements/device-list';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceApi';
import Pagination from '../../components/core/pagination';

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices(null, null, 1, 9).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device]);

  useEffect(() => {
    fetchDevices(
      device.selectedType.id,
      device.selectedBrand.id,
      device.page,
      2
    ).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device, device.page, device.selectedType, device.selectedBrand]);

  return (
    <Container className={styles.main}>
      <div className={styles.section_filter}>
        <TypeBar />
      </div>
      <div className={styles.section_cards}>
        <BrandBar />
        <DeviceList />
        {device.totalCount > 9 ? <Pagination /> : ''}
      </div>
    </Container>
  );
});

export default Shop;
