import React from 'react'
import { useState } from 'react';
import styles from './Header.module.css'
import "@fontsource/antonio";
import NavBar from '../NavBar';
import MenuButton from '../MenuButton'

const Header = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <header className={open ? `${styles.headerMenu} ${styles.header}` : styles.header}>
      <h1 className={styles.title}>THE PLANETS</h1>
      <NavBar clickHandler={props.clickHandler} funcionaplis={() => setOpen(!open)} planetSelected={props.planetSelected} className={styles.group} open={open}/>
      <MenuButton clickHandler={() => setOpen(!open)} open={open} />
    </header>
  )
}

export default Header