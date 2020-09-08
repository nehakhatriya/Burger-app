import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl'

const BuildControls=(props)=>{

     const controls=[
          {label:"Cheese",type:"cheese"},
          {label:"Salad",type:"salad"},
          {label:"Bacon",type:"bacon"},
          {label:"Meat",type:"meat"}
        ]
      return(
          <div className={classes.BuildControls}>
               <div>Current Price: <strong>{props.price.toFixed(2)}</strong></div>
               <p></p>
              {controls.map(element=>{
                  return <BuildControl key={element.label}  
                  ingredientAdded={()=>props.addIng(element.type)}
                  ingredientRemoved={()=>props.removeIng(element.type)}
                  label={element.label}
                  disable={props.disabled[element.type]}/>
              })}
          </div>
      )
}
export default BuildControls;