import { noteActionTypes } from '../actions/noteAction';

const initialState = {
    notes: [],
    note: {},
    loading: false,
    error: null
}

export default function noteReducer(state=initialState, action) {
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
                )
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