import React from 'react'
import classes from './button.module.css'
const Button =(props)=>(
    <button className={[classes.Button, classes[props.btnType]].join(' ')} onClick={props.click}>{props.children}</button>
);
export default Button;