const {
    FETCH_SMOOTHIE_REQUEST,
    FETCH_SMOOTHIE_SUCCESS,
    FETCH_SMOOTHIE_FAIL,
  } = require("../Actions/ActionTypes");
  
  const smoothieDescriptionReducer = (state = { smoothieDescription: [] }, action) => {
    switch (action.type) {
      case FETCH_SMOOTHIE_REQUEST:
        return { loading: true };
      case FETCH_SMOOTHIE_SUCCESS:
        return { loading: false, smoothieDescription: action.payload };
      case FETCH_SMOOTHIE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default smoothieDescriptionReducer;
  