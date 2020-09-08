import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredient'
import classes from './Burger.module.css'

const Burger =(props)=>{

    let transformedingrediets=Object.keys(props.ingredients)
    .map(igkey=>{ 
        return [...Array(props.ingredients[igkey])].map((element,i)=>{
            return <BurgerIngredients key={igkey+i}type={igkey}/>
        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[])
    if(transformedingrediets.length===0)
      transformedingrediets=<p>Start adding ingrediants</p>
    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
           {transformedingrediets}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )

}
export default Burger;