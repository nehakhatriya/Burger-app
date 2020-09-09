import React, { Fragment } from 'react'
import Button from '../../Layout/UI/button'
const Ordersummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igkey => {
            return <li><span style={{ textTransform: 'capitalize' }}>{igkey}</span>:{props.ingredients[igkey]}</li>
        })


    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <div>Current Price: <strong>{props.price.toFixed(2)}</strong></div>
            <Button btnType="Danger" click={props.cancel}>Cancel</Button>
            <Button btnType="Success" click={props.continue}>Continue</Button>
        </Fragment>
    )

}
export default Ordersummary;