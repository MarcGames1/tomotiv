import React, { useState } from 'react';
import styles from './Accordion.module.css';

const Accordion = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <h2 className={styles.title}>{props.title}</h2>
        <div
          className={isExpanded ? styles.arrowDown : styles.arrowRight}
        ></div>
      </div>
      {isExpanded && <div className={styles.content}>{props.children}</div>}
    </div>
  );
};

export default Accordion;
