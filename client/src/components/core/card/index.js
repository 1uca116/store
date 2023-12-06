import styles from './index.module.css';
import React from 'react';
import classNames from 'classnames';

const Card = ({ children, className }) => {
  return <div className={classNames(styles.main, className)}>{children}</div>;
};

export default Card;
