import React from 'react'
import { useState } from 'react';
import Article from '../Article';
import Section from '../Section';
import Planet from '../Planet';
import styles from './Main.module.css'

const Main = ({ info }) => {
    const [view, setView] = useState("overview");

    return (
        <main className={styles.main}>
            <Planet info={info} option={view} className={styles.item1} />
            <Article info={info} option={view} className={styles.item2} />
            <Section handleClick={(x) => setView(x)} className={styles.item3} option={view} planet={info.name}/>
        </main>
    )
}

export default Main