import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import getReducer from "./reducer/getReducer";


const store  = createStore(getReducer,applyMiddleware(thunk))

export default store;