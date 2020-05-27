export const noteActionTypes = {
    ADD_NOTE: 'ADD_NOTE',
    DELETE_NOTE: 'DELETE_NOTE',
    GET_NOTES: 'GET_NOTES',
    ITEMS_LOADING: 'ITEMS_LOADING',
    SELECT_NOTE: 'SELECT_NOTE'
}

export const addNote = note => (dispatch) => {
    return dispatch({
        type: noteActionTypes.ADD_NOTE,
        note
    })
}

export const deleteNote = note => (dispatch) => {
    return dispatch({
        type: noteActionTypes.DELETE_NOTE,
        note
    })
}

export const getNotes = () => (dispatch) => {
    dispatch(setItemsLoading())
    return dispatch({
        type: noteActionTypes.GET_NOTES,
    })
}

export const selectNote = note => (dispatch) => {
    dispatch(setItemsLoading())
    return dispatch({
        type: noteActionTypes.SELECT_NOTE,
        note
    })
}

export const setItemsLoading = () => {
    return {
        type: noteActionTypes.ITEMS_LOADING
    }
}
