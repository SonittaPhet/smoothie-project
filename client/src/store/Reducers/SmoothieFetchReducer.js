import { 
    FETCH_SMOOTHIE_FAIL, 
    FETCH_SMOOTHIE_REQUEST, 
    FETCH_SMOOTHIE_SUCCESS, 
} from "../Actions/ActionTypes";

export const SmoothieReducer = (state = { smoothieList: [] }, action) => {
    switch (action.type) {
        case FETCH_SMOOTHIE_REQUEST:
            return { loading: true };
        case FETCH_SMOOTHIE_SUCCESS:
            return { loading: false, smoothieList: action.payload };
        case FETCH_SMOOTHIE_FAIL:
            return { loading: false, error: action.payload };
        default:
        return state;
    }
}; 