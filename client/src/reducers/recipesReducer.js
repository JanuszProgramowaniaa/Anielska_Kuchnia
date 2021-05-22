import { FETCH_RECIPES, FETCH_RECIPE, PUSH_RECIPE_SUCCESS, PUSH_RECIPE_FAILED } from '../actions/types'
import { } from '../actions/types'


const initialState = {
    przepisy: [],
    przepis: {},
    msg: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_RECIPES:
            return {
                ...state,
                przepisy: action.payload
            }
        case FETCH_RECIPE:
            return {
                ...state,
                przepis: action.payload
            }
        case PUSH_RECIPE_SUCCESS:
            return {
                ...state,
                przepis: action.payload
            }
        case PUSH_RECIPE_FAILED:
            return {
                ...state,
                msg: action.msg
            };
        default:
            return {
                ...state
            }
    }
}