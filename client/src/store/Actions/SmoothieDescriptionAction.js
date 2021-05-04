import Axios from "axios";
import {
  FETCH_SMOOTHIE_REQUEST,
  FETCH_SMOOTHIE_REQUEST,
  FETCH_SMOOTHIE_REQUEST,
} from "./ActionTypes";

const smoothieDescriptionAction = (smoothie_id) => async (dispatch) => {
  const url = `http://127.0.0.1:5000/smoothie-information/description/${smoothie_id}`;
  const production_url = `/smoothie/description/${smoothie_id}`;
  try {
    dispatch({ type: FETCH_SMOOTHIE_REQUEST });
    const { data } = await Axios.get(production_url);
    dispatch({ type: FETCH_SMOOTHIE_REQUEST, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_SMOOTHIE_REQUEST });
  }
};

export default smoothieDescriptionAction;
