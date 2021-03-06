import React, { Component } from 'react'
import Button from '../Layout/UI/button'
import classes from './ContactData.module.css'
import axios from 'axios'
import Spinner from '../Layout/UI/spinner'
import Input from '../Layout/UI/Input'
import {connect} from 'react-redux'
import * as actionCreater from '../../store/actions/combined-actions'
class ContactData extends Component {
    state = {
        orderForm: {
            
                Name: {
                    elementType: "input",
                    elementCongif: { type: "text", placeholder: 'Your Name' },
                    value: ''
                },
                Street: {
                    elementType: "input",
                    elementCongif: { type: "text", placeholder: 'Street' },
                    value: ''
                },
                Zipcode: {
                    elementType: "input",
                    elementCongif: { type: "text", placeholder: 'Zipcode' },
                    value: ''
                },
                Country: {
                    elementType: "input",
                    elementCongif: { type: "text", placeholder: 'Country' },
                    value: ''
                },
                Email: {
                    elementType: "input",
                    elementCongif: { type: "email", placeholder: 'Your email' },
                    value: ''
                },
                Deliverymethod: {
                    elementType: "select",
                    elementCongif: { options: [{ value: 'fastest', displayValue: 'Fastest' },
                                 { value: 'cheapest', displayValue: 'Cheapest' }]},
                    value:''
            }
        },
        // loading: false
    
}
orderhandler = (ev) => {
    ev.preventDefault();
    // this.setState({ loading: true })
    const order = {
        ingredients: this.props.ings,
        price: this.props.price,
        customer: {
            name: "neha khatriya",
            address: {
                street: "ankur",
                zipcode: '452010',
                country: "India"
            },
            email: "nehakhatriya@yahoo.com",

        },
        deliverymethod: "fastest"
    }
    // axios.post("/orders.json", order)
    //     .then(res => {
    //         this.setState({ loading: false })
    //         this.props.history.push('/')
    //     })
    //     .catch(error => this.setState({ loading: false }))
   this.props.onOrderBurger(order)

}

inputChangedHandler=(event, inputIdentifier)=>{
    console.log(event.target.value)

}
render() {

    let input=[];
    for(let key in this.state.orderForm){
        input.push({ id:key, config:this.state.orderForm[key]})
    }

    let form = (<form>
        {input.map(element=>{
           return <Input label={element.id} changed={(event)=>this.inputChangedHandler()} elementType={element.config.elementType} elementConfig={element.config.elementCongif} value={element.config.value}></Input>
            
        })}
        <Button btnType="Success" click={this.orderhandler}>ORDER</Button>
    </form>);
    if (this.props.loading) {
        form = <Spinner />
    }
    return (
        <div className={classes.ContactData}>
            <h4>Enter your details</h4>
            {form}
        </div>
    )
}
}



const mapStateToProps=state=>{
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading
    }
}
const mapActionToProps=dispatch=>{
    return {
        onOrderBurger:(orderData)=>dispatch(actionCreater.purchaseBurger(orderData))
    }
}
export default connect(mapStateToProps,mapActionToProps)(ContactData)

