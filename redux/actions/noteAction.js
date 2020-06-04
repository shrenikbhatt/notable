import Axios from "axios"

export const noteActionTypes = {
    ADD_NOTE: 'ADD_NOTE',
    DELETE_NOTE: 'DELETE_NOTE',
    GET_NOTES: 'GET_NOTES',
    ITEMS_LOADING: 'ITEMS_LOADING',
    SELECT_NOTE: 'SELECT_NOTE',
    UPDATE_NOTE: 'UPDATE_NOTE',
    UPDATE_NOTE_TITLE: 'UPDATE_NOTE_TITLE',
    UPDATE_SAVESTATE: 'UPDATE_SAVESTATE',
    NOTE_ERROR: 'NOTE_ERROR'
}

export const addNote = note => (dispatch) => {
    const body = JSON.stringify(note)
    const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token")
        }
      };
    Axios.post("/api/notes/", body, config)
    .then(res =>
        dispatch({
        type: noteActionTypes.ADD_NOTE,
        note,
        data: res.data
        })
    )
    .catch(error => dispatch({
      type: noteActionTypes.NOTE_ERROR
    }))
}

export const deleteNote = note => (dispatch) => {
    const body = JSON.stringify(note)
    const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token")
        }
      };
    Axios.delete("/api/notes/"+note.note_id+"/", config)
    .then(res => dispatch({
        type: noteActionTypes.DELETE_NOTE,
        note
    })
    )
    .catch(error => dispatch({
      type: noteActionTypes.NOTE_ERROR
    }))
}

export const getNotes = () => (dispatch) => {
    const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token")
        }
      };
    dispatch(setItemsLoading())
    Axios.get("/api/notes/", config)
    .then(res => dispatch({
        type: noteActionTypes.GET_NOTES,
        data: res.data
    })
    )
    .catch(error => dispatch({
      type: noteActionTypes.NOTE_ERROR
    }))
}

export const selectNote = note => (dispatch) => {
    const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token")
        }
      };
    Axios.get("/api/notes/"+note.note_id+"/", config)
      .then(res => dispatch({
          type: noteActionTypes.SELECT_NOTE,
          data: res.data
      })
      )
      .catch(error => dispatch({
        type: noteActionTypes.NOTE_ERROR
      }))
}

export const updateNote = (body1, id) => (dispatch) => {
    const data = {
      body: body1
    }
    body = JSON.stringify(data)

    const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token")
        }
      };
    Axios.put("/api/notes/"+id+"/", body, config)
    .then(res => dispatch({
        type: noteActionTypes.UPDATE_NOTE,
        body1
    })
    )
    .catch(error => dispatch({
      type: noteActionTypes.NOTE_ERROR
    }))
}

export const updateNoteTitle = (title1, id) => (dispatch) => {
  console.log('here')
  const data = {
    title: title1
  }
  body = JSON.stringify(data)

  const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token")
      }
    };

    Axios.put("/api/notes/"+id+"/", body, config)
    .then(res => dispatch({
        type: noteActionTypes.UPDATE_NOTE_TITLE,
        title1
    })
    )
    .catch(error => dispatch({
      type: noteActionTypes.NOTE_ERROR
    }))
}

export const updateSaveState = () => (dispatch) => {
    return dispatch({
        type: noteActionTypes.UPDATE_SAVESTATE
    })
}

export const setItemsLoading = () => {
    return {
        type: noteActionTypes.ITEMS_LOADING
    }
}
