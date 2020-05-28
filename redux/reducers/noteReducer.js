import { noteActionTypes } from '../actions/noteAction';

const initialState = {
    notes: [],
    note: null,
    loading: false,
    error: null
}

export default function notesReducer(state=initialState, action) {
    switch (action.type){
        case noteActionTypes.GET_NOTE:
            return  {
                ...state,
                notes: action.notes,
                loading: false,
                error: null
            }
        case noteActionTypes.ADD_NOTE:
            return {
                ...state,
                notes: [action.note, ...state.notes],
                note: action.note
            }
        case noteActionTypes.DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(
                    note => note.id !== action.note.id
                ),
                note: null
                
            }
        case noteActionTypes.SELECT_NOTE:
            return{
                ...state,
                note: action.note
            }
        case noteActionTypes.UPDATE_NOTE:
            const newNotes = [...state.notes]
            const i = newNotes.indexOf(state.note)
            console.log(action.body)
            newNotes[i].body = action.body
            return{
                ...state,
                notes: newNotes
            }
        case noteActionTypes.UPDATE_NOTE_TITLE:
                const newNotes1 = [...state.notes]
                const i1 = newNotes1.indexOf(state.note)
                newNotes1[i1].title = action.title
                return{
                    ...state,
                    notes: newNotes1
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