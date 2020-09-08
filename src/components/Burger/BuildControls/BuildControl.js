import React from 'react'
import classes from './BuildControl.module.css'
const BuildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>
                {props.label}
            </div>
            
                <button type="button" onClick={props.ingredientRemoved} disabled={props.disable} className={classes.Less} >Less</button>
                <button type="button" onClick={props.ingredientAdded} className={classes.More}>More</button>
            
        </div>
    )
}

export default BuildControl