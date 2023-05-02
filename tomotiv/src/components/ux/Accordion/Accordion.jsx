import React, { useState } from 'react';
import styles from './Accordion.module.css';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? styles.active : '';

    return (
      <React.Fragment key={item.title}>
        <div
          className={`${styles.title} ${active}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`${styles.content} ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className={styles.accordion}>{renderedItems}</div>;
};

export default Accordion;
