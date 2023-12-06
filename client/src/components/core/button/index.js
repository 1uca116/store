import styles from './index.module.css';
import React from 'react';
import classNames from 'classnames';

const Button = ({ variant, children, ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      className={classNames(
        styles.button,
        { [styles.primary]: variant === 'primary' },
        { [styles.secondary]: variant === 'secondary' },
        { [styles.tertiary]: variant === 'tertiary' }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
