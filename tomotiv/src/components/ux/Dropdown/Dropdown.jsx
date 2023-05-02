import React , { useState } from 'react';
import styles from './Dropdown.module.css';
import { button } from '../../../styles';
function Dropdown({ children, label }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      onMauseLeave={toggleMenu}
      onMouseEnter={toggleMenu}
      className={`${styles['dropdown-container']}`}
    >
      <div className={`${styles['dropdown-header']} ${button.dropdown}`}>
        {label}{' '}
        <span className={styles['dropdown-arrow']}> &#32; &#32; &#9660;</span>
      </div>
      {showMenu && (
        <>
          <div
            onMouseLeave={toggleMenu}
            className={`${styles['dropdown-content']} `}
          >
            {React.Children.map(children, (child, index) => (
              <div key={index} className={styles['dropdown-item']}>
                {child}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Dropdown;
