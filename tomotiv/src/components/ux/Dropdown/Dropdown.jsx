import React , { useState } from 'react';
import styles from './Dropdown.module.css';

function Dropdown({ children, label }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles['dropdown-container']}>
      <div className={styles['dropdown-header']} onMouseEnter={toggleMenu}>
        {label} <span className={styles['dropdown-arrow']}>&#9660;</span>
      </div>
      {showMenu && (
        <div onMouseLeave={toggleMenu} className={styles['dropdown-content']}>
          {React.Children.map(children, (child, index) => (
            <div key={index} className={styles['dropdown-item']}>
              {child}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
