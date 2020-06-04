import { userActionTypes } from '../actions/userActions';

const initialState = {
    user: null,
    token: null,
    verified: false,
    error: false
}

export default function userReducer(state=initialState, action){
    switch(action.type){
        case userActionTypes.REGISTER_USER:
            localStorage.setItem("token", action.token.token)
            return{
                ...state,
                token: action.token.token,
                verified: true,
                user: action.user
            }
        case userActionTypes.LOGIN_USER:
            localStorage.setItem("token", action.token.token)
            return{
                ...state,
                token: action.token.token,
                verified: true,
                user: action.user
            }
        case userActionTypes.LOGOUT_USER:
            localStorage.removeItem("token")
            return{
                ...state,
                user: null,
                token: null,
                verified: false,
                error: false
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