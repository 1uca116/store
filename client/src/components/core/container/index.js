import styles from './index.module.css';
import React from 'react';
import classNames from 'classnames';

const Container = ({ children, className }) => {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
};

export default Container;
