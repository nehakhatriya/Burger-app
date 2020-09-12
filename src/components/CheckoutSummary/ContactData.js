import React, { Component } from 'react'
import Button from '../Layout/UI/button'
import classes from './ContactData.module.css'
import axios from 'axios'
import Spinner from '../Layout/UI/spinner'

class ContactData extends Component{
    state={
        loading:false
    }

orderhandler=(ev)=>{
    ev.preventDefault();
   this.setState({loading:true})
         const order={
             ingredients:this.props.ingredients,
             price:this.props.totalPrice,
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
         .then(res=>{
             this.setState({loading:false})
             this.props.history.push('/')
            }   )
         .catch(error=>this.setState({loading:false}))

}
render(){
    let form=( <form>
        <input type="text" name="name" placeholder="Enter Name"></input>
        <input type="email"  name="email" placeholder="Enter email"></input>
        <input type="text"  name="street" placeholder="Enter street"></input>
        <input type="text"  name="postal" placeholder="Enter Postal"></input>
        <Button btnType="Success" click={this.orderhandler}>ORDER</Button>
    </form>);
    if(this.state.loading){
        form=<Spinner/>
    }
      return (
        <div className={classes.ContactData}>
            <h4>Enter your details</h4>
           {form}
        </div>
    )
}
}

export default ContactData