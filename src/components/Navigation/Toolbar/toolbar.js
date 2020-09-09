import React from 'react'
import classes from './toolbar.module.css'
import LOGO from '../../Logo/logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar=(props)=>(

    <header className={classes.Toolbar}>
        <div>MENU</div>
        <LOGO></LOGO>
        <nav>
        <NavigationItems></NavigationItems>
        </nav>
    </header>
)

export default Toolbar;