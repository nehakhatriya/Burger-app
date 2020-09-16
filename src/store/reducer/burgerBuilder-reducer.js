import * as actionType from '../actions/actionTypes'

const initialState={
    ingredients:null,
        totalPrice:4,
        error:false
}
const INITIAL_PRICE={
    cheese: 1.3,
    bacon:2,
    meat:3,
    salad:1
}
const reducer=(state=initialState,action)=>{

    switch(action.type)
    {
   case actionType.ADD_INGREDIENT:
       return{
          ...state,
          ingredients:{
              ...state.ingredients,
              [action.ingredientName]:state.ingredients[action.ingredientName]+1
       },
       totalPrice:state.totalPrice+INITIAL_PRICE[action.ingredientName]
    }
   case actionType.REMOVE_INGREDIENT:
       return {
        ...state,
        ingredients:{
            ...state.ingredients,
            [action.ingredientName]:state.ingredients[action.ingredientName]-1
     },
     totalPrice:state.totalPrice-INITIAL_PRICE[action.ingredientName]
       }
    case actionType.SET_INGREDIENTS:{
        return {
            ...state,
            ingredients:action.ingredients,
            error:false,
            totalPrice:4
        }
    }
    case actionType.FETCH_INGREDIENTS_FAILED:{
        return {
            ...state,
            error:true
        }
    }
    default:
        return state
    }

}

export default reducer;