import styles from './index.module.css';
import React, { useState } from 'react';
import Container from '../../components/core/container';
import CreateType from '../../components/elements/modals/CreateType';
import CreateBrand from '../../components/elements/modals/CreateBrand';
import CreateDevice from '../../components/elements/modals/CreateDevice';
import Button from '../../components/core/button';

const Admin = () => {
  const [typeVisible, setTypeVisible] = useState(false);
  const [brandVisible, setBrandVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <Container className={styles.main}>
        <div className={styles.btn_group}>
      <Button variant={'secondary'} onClick={() => setTypeVisible(true)}>
        Add type
      </Button>
      <Button variant={'secondary'} onClick={() => setBrandVisible(true)}>
        Add brand
      </Button>
      <Button variant={'secondary'} onClick={() => setDeviceVisible(true)}>
        Add device
      </Button>
        </div>

      <CreateType
        showModal={typeVisible}
        onHide={() => setTypeVisible(false)}
      />
      <CreateBrand
        showModal={brandVisible}
        onHide={() => setBrandVisible(false)}
      />
      <CreateDevice
        showModal={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
    </Container>
  );
};

export default Admin;
