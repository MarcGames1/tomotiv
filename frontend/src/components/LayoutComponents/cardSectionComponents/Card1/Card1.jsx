import React from 'react'
import styles from './Card1.module.css'

const Card1 = ({children, heading, p, className="", small=false}) => {
  return (
    <div
      className={`flex flex-col items-center p-4 w-full prose ${className} ${small ? "": styles.container}`}
    >
      <div className="text-primary">{children}</div>
      <div className="font-bold text-2xl">{heading}</div>

      <p>{p}</p>
    </div>
  );
}

export default Card1

//label p, icon