import React from 'react'
import styles from './Buttons.module.css'
const Button = ({
  submit = false,
  children,
  onMouseLeave,
  onMouseOver = (e) => e,
  className = '',
}) => {
  return (
    <button
    onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      className={className}
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
};

export default Button