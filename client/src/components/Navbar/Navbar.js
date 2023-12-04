import styles from './index.module.css';
import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import Container from "../core/container";

const Navbar = observer(() => {
    const { user } = useContext(Context)

    return (
        <Container className={styles.main}>
            <Link to={'/'}>Main</Link>
            {user.isAuth ?
                <div className={styles.btn_group}>
                    <button className={styles.btn}>Admin panel</button>
                    <button className={styles.btn}>Log in</button>
                </div>
                :
                <div>
                    <button className={styles.btn} onClick={()=> user.setIsAuth(true)}>Authorization</button>
                </div>
            }
        </Container>
    );
});

export default Navbar;
