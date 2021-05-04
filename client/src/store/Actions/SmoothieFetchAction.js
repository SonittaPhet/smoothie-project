import { 
    FETCH_SMOOTHIE_FAIL, 
    FETCH_SMOOTHIE_REQUEST, 
    FETCH_SMOOTHIE_SUCCESS, 
} from "./ActionTypes"
import axios from "axios";

export const allSmoothieAction = () => async (dispatch) => {    
    const url = '/smoothie/all-smoothie';
    try {
        dispatch({ type: FETCH_SMOOTHIE_REQUEST })
        const { data } = await axios.get(url);;
        dispatch({ type: FETCH_SMOOTHIE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_SMOOTHIE_FAIL, payload: error });
    }
}; 