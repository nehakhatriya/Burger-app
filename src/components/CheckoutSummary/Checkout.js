import React, { Component } from 'react'
import CheckoutSummary from './CheckoutSummary'
import {Route}  from 'react-router-dom'
import ContactData from '../CheckoutSummary/ContactData'

class Checkout extends Component {
    state = {
        ingredients: {
            cheese: 1,
            meat: 1,
            salad: 1,
            bacon: 1
        },
        totalprice:0
    }
    checkoutCancel = () => {
        this.props.history.goBack()
    }

    checkoutContinue = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    componentWillMount(){
        const query=new URLSearchParams(this.props.location.search)
        const ingredients={}
        let totalprice=0
        for(let param of query.entries() ){
            if(param[0]==="price"){
            totalprice=param[1]
            }
         //['salad','1']
         else
         ingredients[param[0]]= +param[1]
        }
        this.setState({ingredients:ingredients,totalprice:totalprice})
    }
    render() {
        return (
            <div>
            <CheckoutSummary ingredient={this.state.ingredients}
                checkoutCancel={this.checkoutCancel} checkoutContinue={this.checkoutContinue} />
                <Route path={this.props.match.path+"/contact-data"}  render={(props)=><ContactData ingredients={this.state.ingredients}  totalPrice={this.state.totalprice} {...props}/>}/>
            </div>
        )

    }
}


export default Checkout;