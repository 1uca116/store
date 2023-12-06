import styles from './index.module.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import Container from '../core/container';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import { IoLogoElectron } from 'react-icons/io5';
import Button from '../core/button';

const Navbar = observer(() => {
  const { user } = useContext(Context);
  const history = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Container className={styles.main}>
      <Link to={'/'} className={styles.brand}>
        <IoLogoElectron className={styles.logo} />
        <div className={styles.brand_name}>
          <div className={styles.title}>TECHNOCART</div>
          <div>electronics</div>
        </div>
      </Link>
      <div className={styles.links_group}>
        <Link to={SHOP_ROUTE}>Online shop</Link>
        {user.isAuth && <Link to={ADMIN_ROUTE}>Admin panel</Link>}
      </div>

      {user.isAuth ? (
        <Button variant={'primary'} className={styles.btn} onClick={() => logOut()}>
          Log out
        </Button>
      ) : (
        <Button variant={'primary'} className={styles.btn} onClick={() => history(LOGIN_ROUTE)}>
          Authorization
        </Button>
      )}
    </Container>
  );
});

export default Navbar;
