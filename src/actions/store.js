import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { reducers } from "../reducers";

// Create the store with configureStore
export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),

    // Enable Redux DevTools only in development
    devTools: process.env.NODE_ENV !== "production"
});

// import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
// import { thunk } from "redux-thunk";
// import { reducers } from "../reducers";

// export const store = createStore(
//     reducers,
//     compose(
//         applyMiddleware(thunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// )