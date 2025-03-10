import { ACTION_TYPES } from "../actions/dTransactionDetail";
const initialTransactionDetailState = {
    list: []
}

export const dTransactionDetail = (state=initialTransactionDetailState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            };
            // break;
            
        case ACTION_TYPES.FETCH_BY_ID:
            return {
                ...state,
                list: state.list.filter(x => x.id == action.payload)
            };
            // break;

        case ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            };
            // break;

        case ACTION_TYPES.UPDATE:
            return {
                ...state,
                list: state.list.map(x => x.id == action.payload.id ? action.payload : x)
            };
            // break;

        case ACTION_TYPES.DELETE:
            return {
                ...state,
                list: state.list.filter(x => x.id != action.payload)
            };
            // break;
    
        default:
            return state;
            // break;
    }
}