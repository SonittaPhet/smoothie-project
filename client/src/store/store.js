import { 
  createStore, 
  combineReducers, 
  applyMiddleware, 
  compose} from "redux"
import thunk from "redux-thunk";
import { SmoothieReducer } from "./Reducers/SmoothieFetchReducer";
import smoothieDescriptionReducer from "./Reducers/SmoothieDescriptionReducer"

// CHANGE smoothieList
const initialState={};

const reducer = combineReducers({
    smoothieList: SmoothieReducer,
    smoothieInformation: smoothieDescriptionReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;