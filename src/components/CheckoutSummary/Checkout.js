import React, { Component } from 'react'
import CheckoutSummary from './CheckoutSummary'
import {Route}  from 'react-router-dom'
import ContactData from '../CheckoutSummary/ContactData'
import {connect} from 'react-redux'

class Checkout extends Component {

    checkoutCancel = () => {
        this.props.history.goBack()
    }

    checkoutContinue = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        return (
            <div>
            <CheckoutSummary ingredient={this.props.ings}
                checkoutCancel={this.checkoutCancel} checkoutContinue={this.checkoutContinue} />
                <Route path={this.props.match.path+"/contact-data"} component={ContactData}/>
            </div>
        )

    }
}

const mapStateTOProps= state=>{
    return {
   ings:state.ingredients
    }
}
export default connect(mapStateTOProps)(Checkout);