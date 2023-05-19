import React from 'react'
import Orbital from '../Orbital'
import styles from './Footer.module.css'

const Footer = ({ info }) => {
  return (
    <footer className={styles.footer}>
        <Orbital orbits={'ROTATION TIME'} data={info.rotation} className="footerOrbital" />
        <Orbital orbits={'REVOLUTION TIME'} data={info.revolution} className="footerOrbital" />
        <Orbital orbits={'RADIUS'} data={info.radius} className="footerOrbital" />
        <Orbital orbits={'AVERAGE TEMP.'} data={info.temperature} className="footerOrbital" />
    </footer>
  )
}

export default Footer