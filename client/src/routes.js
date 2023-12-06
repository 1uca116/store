import Admin from './pages/admin/index';
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  MAIN_ROUTE,
} from './utils/consts';
import Basket from './pages/basket/index';
import Shop from './pages/shop/index';
import Auth from './pages/auth/index';
import Device from './pages/device/index';
import Main from './pages/main';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Admin />,
  },
  {
    path: BASKET_ROUTE,
    Component: <Basket />,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: <Shop />,
  },
  {
    path: MAIN_ROUTE,
    Component: <Main />,
  },
  {
    path: LOGIN_ROUTE,
    Component: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Auth />,
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: <Device/>,
  },
];
