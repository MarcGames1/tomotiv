import React, { useState } from 'react';
import styles from './Accordion.module.css';
import { button } from '../../../styles';
const Accordion = ({title, children}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.accordion}>
      <div className={button.primary} onClick={toggleAccordion}>
        <h2 className={styles.title}>{title}</h2>
        <div
          className={isExpanded ? styles.arrowDown : styles.arrowRight}
        ></div>
      </div>
      {isExpanded && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default Accordion;
