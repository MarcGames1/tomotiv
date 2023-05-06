import React from 'react';
import {ImSpinner2} from 'react-icons/im'

import styles from './Spinner.module.css'


const LoadingSpinner = ({ color, message }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ImSpinner2 color={color} size={'3em'} className={styles.spinner} />
      {message && <p className="mt-8 text-center text-gray-600">{message}</p>}
    </div>
  );
};

export default LoadingSpinner;
