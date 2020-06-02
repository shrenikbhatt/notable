import { userActionTypes } from '../actions/userActions';

const initialState = {
    user: null,
    verified: false,
    error: false
}

export default function userReducer(state=initialState, action){
    switch(action.type){
        case userActionTypes.REGISTER_USER:
            return{
                ...state,
                verified: true,
                user: action.user
            }
        case userActionTypes.LOGIN_USER:
            return{
                ...state,
                verified: true,
                user: action.user
            }
        case userActionTypes.LOGIN_FAIL:
            return{
                ...state,
                error: true
            }
        default:
            return state
    }
}