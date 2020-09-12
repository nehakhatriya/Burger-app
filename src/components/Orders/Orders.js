import React, { Component } from 'react'
import axios from 'axios'
import Order from './Order'
import withErrorHandler from '../Layout/UI/withExceptionHandling'

class Orders extends Component {

    state={
        orders:[]
    }
    componentDidMount(){

        axios.get("/orders.json")
        .then(response=>{
             console.log(response.data)
             const fetchedOrder=[]
             for(let key in response.data){
                 fetchedOrder.push({...response.data[key], id:key})
             }
             
            this.setState({orders:fetchedOrder})
        })
    }
    

    render() {
        return (
            <div style={{textAlign:"center"}}>
                <h2>Your Orders</h2>
                {this.state.orders.map(el=><Order key={el.id} ingredients={el.ingredients} price={el.price}/>)}
            </div>
        )
    }
}

export default withErrorHandler(Orders,axios);