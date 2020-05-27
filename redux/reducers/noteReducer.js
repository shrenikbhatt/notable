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
                notes: [action.note, ...state.notes]
            }
        case noteActionTypes.DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(
                    note => note.id !== action.note.id
                ),
                note: {}
                
            }
        case noteActionTypes.SELECT_NOTE:
            return{
                ...state,
                note: action.note
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