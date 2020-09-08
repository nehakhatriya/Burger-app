import React, { Component, Fragment } from 'react'
import Burger from '../../Burger/Burger'
import BurgerControls from '../../Burger/BuildControls/BuildControls'


const INITIAL_PRICE={
    cheese: 1.3,
    bacon:2,
    meat:3,
    salad:1
}
class BurgerBuilder extends Component {
    state={
        ingredients:{
            cheese:0,
            bacon:0,
            meat:0,
            salad:0
        },
        totalPrice:4
    }

     addIngredientHandler=(type)=>{
             
        const oldCount=this.state.ingredients[type]
         const updatedCount=oldCount+1;
        const updatedIngredients={...this.state.ingredients}
        updatedIngredients[type]=updatedCount;

        const initialPrice=INITIAL_PRICE[type]
        const oldPrice=this.state.totalPrice
        const newPrice=initialPrice+oldPrice
        
        this.setState({ingredients:updatedIngredients,totalPrice:newPrice})
     }

     removeIngredientHandler=(type,key)=>{
         const oldCount=this.state.ingredients[type];
         if(oldCount<=0) return;
         const updatedCount=oldCount-1;
         const updatedIngredients={...this.state.ingredients}
         updatedIngredients[type]=updatedCount;

         const initialPrice=INITIAL_PRICE[type]
         const oldPrice=this.state.totalPrice
         const newPrice=oldPrice-initialPrice
         
         this.setState({ingredients:updatedIngredients,totalPrice:newPrice})
     }
    render() {
        const disabledinfo={...this.state.ingredients}
        for(let key in disabledinfo)
        {
            disabledinfo[key]=disabledinfo[key]<=0
        }
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls removeIng={this.removeIngredientHandler} 
                addIng={this.addIngredientHandler}
                 disabled={disabledinfo}
                 price={this.state.totalPrice}/>      
            </Fragment>
        )
    }
}
export default BurgerBuilder;