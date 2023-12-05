import styles from './index.module.css';
import React, {useState} from 'react';
import Container from "../../components/core/container";
import CreateType from "../../components/elements/modals/CreateType";
import CreateBrand from "../../components/elements/modals/CreateBrand";
import CreateDevice from "../../components/elements/modals/CreateDevice";

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);

    return (
        <Container>
            <button className={styles.btn} onClick={()=>setTypeVisible(true)} >Add type</button>
            <button className={styles.btn} onClick={()=>setBrandVisible(true)} >Add brand</button>
            <button className={styles.btn} onClick={()=>setDeviceVisible(true)} >Add device</button>
            <CreateType showModal={typeVisible} onHide={()=>setTypeVisible(false)}/>
            <CreateBrand showModal={brandVisible} onHide={()=>setBrandVisible(false)}/>
            <CreateDevice showModal={deviceVisible} onHide={()=>setDeviceVisible(false)}/>

        </Container>
    );
};

export default Admin;
