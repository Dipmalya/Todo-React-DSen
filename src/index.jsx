import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import './assets/css/index.css';

import Routes from './routes';
import configureStore from './store';

const store = configureStore({});
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById("app"),
);

module.hot.accept();
