import React, { Component, Fragment } from 'react'
import Burger from '../../Burger/Burger'
import BurgerControls from '../../Burger/BuildControls/BuildControls'
import Modal from '../../Layout/UI/modal'
import Ordersummary from '../../Burger/OrderSummary/OrderSumary'
import axios from 'axios'
import * as actionCreater from '../../../store/actions/combined-actions'
import {connect} from 'react-redux'
import Spinner from '../../Layout/UI/spinner'
import withExceptioHandling from '../../Layout/UI/withExceptionHandling'
 
class BurgerBuilder extends Component {
    state={
        purchaseable:false,
        showSummary:false,
         loading:false,
         error:false
    }

    // componentDidMount(){
    //     axios.get("/ingredients.json")
    //     .then(res=>{
    //         console.log(res.data)
    //         this.setState({ingredients:res.data})
    //     })
    //     .catch(err=>this.setState({error:true}))
    // }
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
    

     purchaseCancel=()=>{ 
         this.setState({ showSummary:false})
     }
     purchaseContinue=()=>{

            this.props.history.push("/checkout" )

     }
    render() {
        const disabledinfo={...this.props.ings}
        for(let key in disabledinfo)
        {
            disabledinfo[key]=disabledinfo[key]<=0
        }
        let burger=this.state.error?<p style={{textAlign:"center"}}>components cannot be uploaded</p>:<Spinner/>
        if(this.props.ings){
            burger=(<Fragment>
            <Burger ingredients={this.props.ings}/> 
            <BurgerControls removeIng={this.props.onRemoveIngredient} 
            addIng={this.props.onAddingIngredient}
             disabled={disabledinfo}
             isPurchaseable={this.updgradePurchase}
             OrderNow={this.updateOrderSummary}
             price={this.props.price}/>
             </Fragment> ) 
            var ordersummary= (this.state.showSummary)?<Ordersummary 
            price={this.props.price} continue={this.purchaseContinue} 
            cancel={this.purchaseCancel}ingredients={this.props.ings}></Ordersummary>:'';
        }
       if(this.state.loading)
          ordersummary= <Spinner/>        
        return (
            <Fragment>
                <Modal modalClosed={this.purchaseCancel} show={this.state.showSummary}>
                    {ordersummary}
                </Modal>
                {burger}
                  
            </Fragment>
        )
    }
}

const mapStateToProps =state=>{
  return{
      ings: state.ingredients,
      price: state.totalPrice
  }
}

const mapActionToProps= dispatch =>{

 return {
     onAddingIngredient : (name)=> dispatch(actionCreater.addIngredient(name)),
     onRemoveIngredient : (name)=> dispatch(actionCreater.removeIngredient(name))
 }
}
export default connect(mapStateToProps,mapActionToProps)(withExceptioHandling(BurgerBuilder,axios));