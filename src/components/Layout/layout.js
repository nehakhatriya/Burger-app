import React, { Fragment } from 'react'
import styles from './layout.module.css'
 const Layout= (props)=>{
    return(
        <Fragment>
            <div>Toolbar Sidebar Navigation-bar</div>
            <main className={styles.content}>
                {props.children}
            </main>
        </Fragment>
    )
}
export default Layout;