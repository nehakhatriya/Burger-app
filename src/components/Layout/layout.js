import React, { Fragment } from 'react'
import styles from './layout.module.css'
import Toolbar from '../Navigation/Toolbar/toolbar' 

const Layout= (props)=>{
    return(
        <Fragment>
            <Toolbar></Toolbar>
            <main className={styles.content}>
                {props.children}
            </main>
        </Fragment>
    )
}
export default Layout;