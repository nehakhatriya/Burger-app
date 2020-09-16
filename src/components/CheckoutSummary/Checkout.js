import React, { Component } from 'react'
import CheckoutSummary from './CheckoutSummary'
import {Route,Redirect}  from 'react-router-dom'
import ContactData from '../CheckoutSummary/ContactData'
import {connect} from 'react-redux'
import * as actionCreater from '../../store/actions/combined-actions'
class Checkout extends Component {

    checkoutCancel = () => {
        this.props.history.goBack()
    }

    checkoutContinue = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
   let summary=<Redirect to='/'/>
   if(this.props.ings){
    let puchasedRedirect=this.props.purchased?<Redirect to='/'/>:null
       summary=(
    <div>
        {puchasedRedirect}
    <CheckoutSummary ingredient={this.props.ings}
        checkoutCancel={this.checkoutCancel} checkoutContinue={this.checkoutContinue} />
        <Route path={this.props.match.path+"/contact-data"} component={ContactData}/>
    </div>
       )
   }
        return summary

    }
}

const mapStateTOProps= state=>{
    return {
   ings:state.burgerBuilder.ingredients,
   purchased: state.order.purchased
    }
}
export default connect(mapStateTOProps)(Checkout);