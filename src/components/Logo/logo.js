import React from 'react'
import burgerlogo from '../../assests/images/27.1 burger-logo.png.png'
import classes from './logo.module.css'
const logo=(props)=>
(
<div className={classes.Logo}>
    <img src={burgerlogo} alt="MyBurger"/>
</div>

)
export default logo;