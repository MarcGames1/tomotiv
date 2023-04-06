import React from 'react'
import styles from './section3.module.css'
const Background = ({children}) => {
  return (
    <section className={styles.sectionBg}>{children}</section>
  )
}

export default Background