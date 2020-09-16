import * as actionTypes from './actionTypes'
import axios from 'axios'
export const addIngredient = (name)=>{
return {
   type:actionTypes.ADD_INGREDIENT,
   ingredientName:name
}
}

export const removeIngredient = (name)=>{
return {
   type:actionTypes.REMOVE_INGREDIENT,
   ingredientName:name
}
}

export const setTngredients=(ings)=>{
   return {
      type: actionTypes.SET_INGREDIENTS,
      ingredients: ings
   }
}

export const fetchIngredientFailed=()=>{
   return {
      type:actionTypes.FETCH_INGREDIENTS_FAILED
   }
}
export const initIngredients=()=>{
    return dispatch=>{
      axios.get("/ingredients.json")
          .then(res=>{
              dispatch(setTngredients(res.data))
          })
          .catch( error=>{
            dispatch(fetchIngredientFailed())
             }
          )
    }
}