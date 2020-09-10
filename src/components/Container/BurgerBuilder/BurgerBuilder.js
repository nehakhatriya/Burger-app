import React, { Component, Fragment } from 'react'
import Burger from '../../Burger/Burger'
import BurgerControls from '../../Burger/BuildControls/BuildControls'
import Modal from '../../Layout/UI/modal'
import Ordersummary from '../../Burger/OrderSummary/OrderSumary'
import axios from 'axios'
import spinner from '../../Layout/UI/spinner'

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
        totalPrice:4,
        purchaseable:false,
        showSummary:false,
         loading:false
    }
   updgradePurchase=(ingredients)=>{
       const sum=Object.keys(ingredients)
       .map((igkey)=>{
           return ingredients[igkey]
       })
       .reduce((sum,el)=>{
           return sum+el
       },0)
       this.setState({purchaseable:sum>0})
       console.log(this.state.purchaseable)
   }

   updateOrderSummary=()=>{
       this.setState({showSummary:!this.state.showSummary})
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
        this.updgradePurchase(updatedIngredients)
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
         this.updgradePurchase(updatedIngredients)
     }

     purchaseCancel=()=>{ 
         this.setState({ showSummary:false})
     }
     purchaseContinue=()=>{
         this.setState({loading:true})
         const order={
             ingredients:this.state.ingredients,
             price:this.state.totalPrice,
             customer:{
                 name:"neha khatriya",
                 address:{
                     street:"ankur",
                     zipcode:'452010',
                 country:"India"
                 },
                 email:"nehakhatriya@yahoo.com",

             },
             deliverymethod:"fastest"
         }
         axios.post("/orders.json",order)
         .then(res=>this.setState({loading:false,showSummary:false}))
         .catch(error=>this.setState({loading:false,showSummary:false}))
     }
    render() {
        const disabledinfo={...this.state.ingredients}
        for(let key in disabledinfo)
        {
            disabledinfo[key]=disabledinfo[key]<=0
        }
        var ordersummary=  (this.state.showSummary)?<Ordersummary price={this.state.totalPrice} continue={this.purchaseContinue} cancel={this.purchaseCancel}ingredients={this.state.ingredients}></Ordersummary>:'';
        if(this.state.loading)
          ordersummary=<spinner/>        
        return (
            <Fragment>
                <Modal modalClosed={this.purchaseCancel} show={this.state.showSummary}>
                    {ordersummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls removeIng={this.removeIngredientHandler} 
                addIng={this.addIngredientHandler}
                 disabled={disabledinfo}
                 isPurchaseable={this.updgradePurchase}
                 OrderNow={this.updateOrderSummary}
                 price={this.state.totalPrice}/>      
            </Fragment>
        )
    }
}
export default BurgerBuilder;