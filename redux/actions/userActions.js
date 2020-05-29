export const userActionTypes = {
    REGISTER_USER: 'REGISTER_USER',
    LOGIN_USER: 'LOGIN_USER',
}

export const registerUser = (user) => dispatch => {
    return{
        type: userActionTypes.REGISTER_USER,
        user
    }
}

export const loginUser = (user) => dispatch => {
    return{
        type: userActionTypes.LOGIN_USER,
        user
    }
}
