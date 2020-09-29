import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './components/reducers';

const logger = createLogger();
let store = {};

if(process.env.NODE_ENV === 'development') {
    store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk, logger))
    );
}
else if(process.env.NODE_ENV === 'production') {
    store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}

export default store;

