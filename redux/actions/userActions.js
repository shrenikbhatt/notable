import axios from "axios"

export const userActionTypes = {
    REGISTER_USER: 'REGISTER_USER',
    LOGIN_USER: 'LOGIN_USER',
    LOGIN_FAIL: 'LOGIN_FAIL',
    REGISTER_FAIL: 'REGISTER_FAIL'
}

export const registerUser = (user) => dispatch => {

    return dispatch({
        type: userActionTypes.REGISTER_USER,
        user
    })
}

export const loginUser = (user) => dispatch => {
    //console.log(user)

    const body = JSON.stringify(user)
    const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

    axios.post("/api/auth/", body, config)
    .then(res =>
        //console.log(res.body)
        dispatch({
            type: userActionTypes.LOGIN_USER,
            user
        })
    )
    .catch(err =>
       //console.log(err)
        dispatch({
            type: userActionTypes.LOGIN_FAIL
        })
    )

    // if (user.username = 'test' && user.password == 'test')
        
    // else
        
}
