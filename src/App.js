import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import data from './data.json'
import styles from './App.module.css'

function App() {
  const [planet, setPlanet] = useState("Mercury");

  let info = data.findIndex(item => item.name === planet);
  info = data[info];

  return (
    <div className={styles.body}>
      <Header clickHandler={(name) => setPlanet(name)} planetSelected={planet}/>
      <Main info={info} />
      <Footer info={info} />
    </div>
  )
}

export default App;