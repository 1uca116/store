import styles from './index.module.css';
import React from 'react';
import Container from "../../components/core/container";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import {Link, useLocation} from "react-router-dom";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    console.log(isLogin)
    return (
        <Container className={styles.main}>
            <div className={styles.card}>
                <h2>{isLogin? 'Login' : 'Create account'}</h2>
                <form className={styles.form}>
                    <input placeholder={'Enter your email'} className={styles.input}/>
                    <input placeholder={'Enter your password'} className={styles.input}/>
                    <button className={styles.btn}>{isLogin? 'Login': 'Submit'}</button>
                </form>
            </div>
            {isLogin?
                <Link to={REGISTRATION_ROUTE} className={styles.link} >Create an account</Link>
                : ''
            }

        </Container>
    );
};

export default Auth;
