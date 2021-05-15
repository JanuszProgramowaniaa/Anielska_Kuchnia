import {FETCH_RECIPES} from '../actions/types'

const initialState = {
    przepisy:[],
    przepis:{}
}

export default function(state=initialState,action)
{
    switch (action.type) {
        case FETCH_RECIPES:
            return{
                ...state,
                przepisy:action.payload
            }
        default:
           return {
               ...state
           }
    }
}