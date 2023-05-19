import React from 'react'
import data from '../../data.json'
import ElementList from '../ElementList';
import styles from './NavBar.module.css'

const renderList = (planet, handleFunction, selected) =>{
  let x;
  selected === planet ? x = `indexHeader_${planet}` : x = null; 
  return <ElementList key={planet} handleClick={handleFunction} text={planet.toUpperCase()} refresh={planet} className={'indexHeader'} selected={x} />
}

const NavBar = (props) => {
  const planets = data.map(planet => planet.name);
  let y = props.open && styles.abierto;
  return (
    <nav className={`${styles.navBar} ${y} ${props.className}`}>
      <ul className={styles.group} onClick={props.funcionaplis}> 
        {planets.map(planet => renderList(planet, props.clickHandler, props.planetSelected))} 
      </ul>
    </nav>
  )
}

export default NavBar