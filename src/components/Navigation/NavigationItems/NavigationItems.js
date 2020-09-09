import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem'
import navigationItem from './NavigationItem'
const navigationItems=(props)=>{
return(
    <ul className={classes.NavigationItems}>
      <NavigationItem active link="/">Burger Builder</NavigationItem>
      <NavigationItem  link="/">Checkout</NavigationItem>
    </ul>
)
}
export default navigationItems