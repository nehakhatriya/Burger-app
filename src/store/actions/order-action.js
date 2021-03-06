import * as actionTypes from './actionTypes'
import axios from 'axios'
export const purchaseBurgerSuccess=(id,orderData)=>{
    return {
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        orderData:orderData
        }
}

export const purchaseBurgerFail=(error)=>{
    return {
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error
    }
}

export const purchaseBurgerStart=()=>{
    return{
        type:actionTypes.PURCHASE_BURGER_START
    }
}
export const purchaseBurger=(order)=>{
    return dispatch =>{
        dispatch(purchaseBurgerStart())
      axios.post("/orders.json", order)
        .then(res => {
            console.log(res.data)
           dispatch(purchaseBurgerSuccess(res.data.name),order)
        })
        .catch(error=>dispatch(purchaseBurgerFail(error)))

    }
}

export const purchaseInit=()=>{
    return {
        type:actionTypes.PURCHASE_INIT,

    }
}