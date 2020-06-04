import axios from "axios"

export const userActionTypes = {
    REGISTER_USER: 'REGISTER_USER',
    LOGIN_USER: 'LOGIN_USER',
    LOGIN_FAIL: 'LOGIN_FAIL',
    REGISTER_FAIL: 'REGISTER_FAIL',
    LOGOUT_USER: "LOGOUT_USER"
}

export const registerUser = (user) => dispatch => {
    const body = JSON.stringify(user)
    const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
    axios.post("/api/auth/register/", body, config)
    .then(res => 
        dispatch({
            type: userActionTypes.REGISTER_USER,
            user,
            token: res.data
        })
    )
    .catch(err =>
         dispatch({
             type: userActionTypes.REGISTER_FAIL
         })
     )
}

export const loginUser = (user) => dispatch => {

    const body = JSON.stringify(user)
    const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

    axios.post("/api/auth/", body, config)
    .then(res =>
        dispatch({
            type: userActionTypes.LOGIN_USER,
            user,
            token: res.data
        })
    )
    .catch(err =>
        dispatch({
            type: userActionTypes.LOGIN_FAIL
        })
    )   
}

export const logoutUser = () => dispatch => {

    return dispatch({
        type: userActionTypes.LOGOUT_USER
    })
}