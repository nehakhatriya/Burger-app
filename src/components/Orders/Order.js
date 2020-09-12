import React from 'react'
const Order = (props) => {

    const ingredients = []
    for (let igName in props.ingredients) {

        ingredients.push({ name: igName, amount: props.ingredients[igName] })
    }
    
    const outputig=ingredients.map(ig=>{
        return <span>{ig.name} ( {ig.amount} )</span>
    })
    return (

        <div className="container">
            <div>{outputig}</div>
            <p><strong>Price: {Math.floor(props.price)}</strong></p>
        </div>
    )
}

export default Order