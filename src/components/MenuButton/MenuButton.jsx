import React from 'react'
import burgerMenu from '../../assets/icon-hamburger.svg'
import iconCancel from '../../assets/icon-cancel.svg'
import styles from './MenuButton.module.css'

const MenuButton = (props) => {
  let image = props.open ? iconCancel : burgerMenu ;
  return <img src={image} className={styles.iconMenu} onClick={props.clickHandler}/>
}

export default MenuButton