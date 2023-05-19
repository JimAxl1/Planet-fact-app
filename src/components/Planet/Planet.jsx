import React from 'react'
import styles from './Planet.module.css'
const kk = require.context('../../', true)

const Planet = ({ info, option, className }) => {
  let x, y;
  option === 'overview' ? y = 'planet' : y = 'internal';
  option === 'geology' ? x =
    <div className={`${className} ${styles.container}`}>
      <img src={kk(info.images.planet)} className={`${styles.image} ${styles[info.name]}`} alt={info.name}></img>
      <img src={kk(info.images.geology)} className={styles.image2} alt={info.name}></img>
    </div>
    : x = 
    <div className={`${className} ${styles.container}`}>
      <img src={kk(info.images[y])} className={`${styles.image} ${styles[info.name]}`} alt={info.name}></img>
    </div>
    
  return x
}

export default Planet