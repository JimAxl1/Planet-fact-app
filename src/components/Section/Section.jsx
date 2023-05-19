import React from 'react'
import ElementList from '../ElementList'
import styles from './Section.module.css'

function isSelected(state, option, planet){
  let x;
  state === option ? x = `sectionSelected_${planet}`: x = null;
  return x;
}

const Section = props => {
  return (
    <section className={props.className}>
        <ol className={styles.group}> 
          <ElementList text={" "} handleClick={props.handleClick} refresh={"overview"} className="options" selected={isSelected(props.option, 'overview', props.planet)}/>
          <ElementList text={" "} handleClick={props.handleClick} refresh={"structure"} className="options" selected={isSelected(props.option, 'structure', props.planet)}/>
          <ElementList text={" "} handleClick={props.handleClick} refresh={"geology"} className="options" selected={isSelected(props.option, 'geology', props.planet)}/>
        </ol>
    </section>
  )
}

export default Section