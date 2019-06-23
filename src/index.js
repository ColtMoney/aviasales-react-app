import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";

import AviasalesService from "./services/aviasales-service";
import {AviasalesServiceProvider} from "./components/aviasales-service-context";
import store from "./store";

import ErrorBoundry from "./components/error-boundry";
import App from "./components/app";

const aviasalesService = new AviasalesService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <AviasalesServiceProvider value={aviasalesService}>
                <App />
            </AviasalesServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById("root"));