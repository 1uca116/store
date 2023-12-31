import styles from './index.module.css';
import React, { useContext, useState } from 'react';
import Container from '../../components/core/container';
import {
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
} from '../../utils/consts';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from '../../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import Card from '../../components/core/card';
import Button from '../../components/core/button';

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const history = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
        console.log('data', data);
      } else {
        data = await registration(email, password);
        console.log('data', data);
      }
      user.setUser('user', user);
      console.log(user);
      user.setIsAuth(true);
      history(MAIN_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  console.log('is login?', isLogin);
  return (
    <Container className={styles.main}>
      <Card className={styles.card}>
        <h2 className={styles.title}>{isLogin ? 'Login' : 'Create account'}</h2>
        <form className={styles.form}>
          <input
            placeholder={'Enter your email'}
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder={'Enter your password'}
            className={styles.input}
            value={password}
            type={'password'}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <Button variant={'primary'} onClick={click}>
          {isLogin ? 'Login' : 'Submit'}
        </Button>
      </Card>
      {isLogin ? (
        <Link to={REGISTRATION_ROUTE} className={styles.link}>
          Create an account
        </Link>
      ) : (
        ''
      )}
    </Container>
  );
});

export default Auth;
