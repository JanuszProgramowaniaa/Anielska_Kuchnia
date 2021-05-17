import { combineReducers } from 'redux'
import mainPageReducer from './mainPageReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'

export default combineReducers({
    main:mainPageReducer,
    error:errorReducer,
    auth:authReducer
})