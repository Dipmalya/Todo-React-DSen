import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './components/reducers';

const logger = createLogger();
let store = {};
let instance = null;

/**
 * Redux dev tool and logger only for dev env
 */
const middlewareConnector = () => {
    if(process.env.NODE_ENV === 'development') {
        store = createStore(
            rootReducer,
            composeWithDevTools(applyMiddleware(thunk, logger))
        );
    }
    return composeWithDevTools(applyMiddleware(thunk))
}

export default function configureStore(initialStore) {
    if(!instance) {
        instance = createStore(
            rootReducer,
            initialStore,
            middlewareConnector()
        )
    }
    return instance;
}
