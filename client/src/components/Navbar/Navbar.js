import styles from './index.module.css';
import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import Container from "../core/container";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../../utils/consts";

const Navbar = observer(() => {
    const { user } = useContext(Context);
    const history = useNavigate();

    return (
        <Container className={styles.main}>
            <Link to={'/'}>Main</Link>
            {user.isAuth ?
                <div className={styles.btn_group}>
                    <button className={styles.btn} onClick={()=> history(ADMIN_ROUTE)}>Admin panel</button>
                    <button className={styles.btn} onClick={()=> history(LOGIN_ROUTE)}>Log out</button>
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
