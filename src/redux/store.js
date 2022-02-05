import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

import rootReducers from "./root-reducers";
import reduxThunk from 'redux-thunk';
const middlewares = [logger];

const store = createStore(rootReducers, applyMiddleware(...middlewares,reduxThunk));

export default store;
