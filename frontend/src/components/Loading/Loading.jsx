import React from 'react';
import styles from './Loading.module.css';


const Loading = () => {
  
  
    return (
        
    <div className={styles.loadingContainer}>
      <div className={styles.loadingDots}>
        <div className={styles.loadingDot}></div>
        <div className={styles.loadingDot}></div>
        <div className={styles.loadingDot}></div>
      </div>
    </div>
  );
};

export default Loading;
