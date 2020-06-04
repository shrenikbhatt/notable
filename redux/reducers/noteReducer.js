import { noteActionTypes } from '../actions/noteAction';

const initialState = {
    notes: [],
    note: null,
    loading: false,
    error: false,
    saveState: ""
}

export default function notesReducer(state=initialState, action) {
    switch (action.type){
        case noteActionTypes.GET_NOTES:
            return  {
                ...state,
                notes: action.data,
                loading: false,
                error: false
            }
        case noteActionTypes.ADD_NOTE:
            return {
                ...state,
                notes: [action.data.results.rows[0], ...state.notes],
                note: action.data.results.rows[0],
                saveState: "Saved"
            }
        case noteActionTypes.DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(
                    note => note.note_id !== action.note.note_id
                ),
                note: null
                
            }
        case noteActionTypes.SELECT_NOTE:
            return{
                ...state,
                note: action.data,
                saveState: "Saved"
            }
        case noteActionTypes.UPDATE_NOTE:
            const newNotes = [...state.notes]
            const i = newNotes.find(note => note.note_id == state.note.note_id)
            i.body = action.body1
            return{
                ...state,
                notes: newNotes,
                saveState: "Saved"
            }
        case noteActionTypes.UPDATE_NOTE_TITLE:
            const newNotes1 = [...state.notes]
            const j = newNotes1.find(note => note.note_id == state.note.note_id)
            j.title = action.title1
            return{
                ...state,
                notes: newNotes1
            }
        case noteActionTypes.NOTE_ERROR:
            localStorage.removeItem("token")
            return{
                ...state,
                error: true
            }
        case noteActionTypes.UPDATE_SAVESTATE:
            return{
                ...state,
                saveState: "Saving..."
            }
        case noteActionTypes.ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}