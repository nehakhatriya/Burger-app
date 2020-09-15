import * as actionType from '../actions/actionTypes'

const initialState={
    ingredients:{
        salad:0, meat:0, cheese:0, bacon:0
    },
        totalPrice:4,
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
    default:
        return state
    }

}

export default reducer;