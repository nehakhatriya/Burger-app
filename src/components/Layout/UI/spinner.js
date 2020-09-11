import  React, {Fragment } from "react";
import classes from './spinner.module.css'
const spinner=(props)=> {
    return(
           <Fragment> <div className={classes.loader}>Loading...</div></Fragment>
    )
}
export default spinner;