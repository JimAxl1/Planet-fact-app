import React from 'react'
import styles from './Article.module.css'
import "@fontsource/antonio";
import iconLink from '../../assets/icon-source.svg'

const Article = ({ info, option, className }) => {
  return (
    <article className={`${className} ${styles.container}`}>
        <h2 className={styles.title}>{info.name}</h2>
        <p className={styles.text}>{info[option].content}</p>
        <p className={styles.textSource}>Source : 
          <a className={styles.source} href={info[option].source} target='_blank' rel="noreferrer">Wikipedia
          <img src={iconLink} className={styles.imgLink} alt={`source info of ${info.name}`}></img>
        </a></p>
    </article>
  )
}

export default Article