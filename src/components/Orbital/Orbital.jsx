import React from 'react'
import styles from './Orbital.module.css'
import "@fontsource/spartan"
import "@fontsource/antonio"

const Orbital = ({ orbits, data, className}) => {
  return (
    <div className={styles[className]}>
        <h3 className={styles.property}>{orbits}</h3>
        <p className={styles.text}>{data}</p>
    </div>
  )
}

export default Orbital