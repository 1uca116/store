import styles from './index.module.css';
import React from 'react';
import classNames from 'classnames';

const Button = ({ variant, className, children, ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      className={classNames(
        styles.button, className,
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
