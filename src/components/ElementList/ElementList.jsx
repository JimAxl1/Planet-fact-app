import React from 'react'
import styles from './ElementList.module.css'
import "@fontsource/spartan";

const ElementList = props => {
  return (
    <li 
      className={`${styles[props.className]} ${styles[props.selected]} ${styles[props.refresh]}`}
      onClick={() => props.handleClick(props.refresh)}>
      {props.text}
    </li>
  )
}

export default ElementList;