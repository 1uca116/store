import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index';

const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <div style={{ height: window.innerHeight - 80 }}>
      <Routes>
        {user.isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component} />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} />
        ))}
      </Routes>
    </div>
  );
};

export default AppRouter;
