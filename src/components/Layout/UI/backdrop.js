import React from 'react'
import classes from './backdrop.module.css'
const BackDrop=(props)=> (

    props.show?<div onClick={props.click} className={classes.backdrop}></div>:null
)

export default BackDrop;