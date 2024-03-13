import React from 'react'

import styles from './../Components/Card.module.css'

export default function Card ({img, h1, link}) {

  return (
    <div className={styles.div}>

  <a href={link}>

 <img className={styles.img} src={img} alt=""  />
  <h1 className={styles.h1}> {h1}</h1>
    
    </a>
    
    </div>

  
    
  )
}
