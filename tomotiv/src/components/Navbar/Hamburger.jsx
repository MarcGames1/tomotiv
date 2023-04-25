import React from 'react'
import styles from './Hamburger.module.css'
const Hamburger = ({active = false}) => {
  return (
    <div className={`${styles.hamburgerMenu} ${active ? styles.open : null}`}>
  <span></span>
  <span></span>
  <span></span>
</div>

  )
}

export default Hamburger