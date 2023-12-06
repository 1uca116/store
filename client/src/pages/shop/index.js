import styles from './index.module.css';
import React, { useContext, useEffect } from 'react';
import Container from '../../components/core/container';
import DeviceList from '../../components/elements/device-list';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceApi';
import Pagination from '../../components/core/pagination';
import Menu from "../../components/elements/menu";

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
      9
    ).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device, device.page, device.selectedType, device.selectedBrand]);

  return (
    <Container className={styles.main}>
      <div className={styles.section_filter}>
        <Menu/>
      </div>
      <div className={styles.section_cards}>
        <DeviceList />
        {device.totalCount > 9 ? <Pagination /> : ''}
      </div>
    </Container>
  );
});

export default Shop;
