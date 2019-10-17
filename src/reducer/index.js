import { combineReducers } from 'redux'
import { LoginReducer } from './loginReducer';
export const rootReducer = combineReducers({
    login: LoginReducer
})