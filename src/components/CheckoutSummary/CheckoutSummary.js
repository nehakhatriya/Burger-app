import React from 'react'
import Burger from '../Burger/Burger'
import Button from '../Layout/UI/button'
import classes from './CheckoutSummary.module.css'

const checkoutSummary = (props) => {


    return (
        <div className={classes.checkoutsummary}>
            <h3>We hope you enjoy this meal!!</h3>
            <div style={{widht:"100%",margin:"auto"}}> 
                <Burger ingredients={props.ingredient} />
                <Button btnType="Danger" click={props.checkoutCancel}>Cancel</Button>
                <Button btnType="Success" click={props.checkoutContinue}>Continue</Button>
            </div>
        </div>
    )
}

export default checkoutSummary