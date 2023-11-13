import {configureStore} from "@reduxjs/toolkit";

import {carsReducer, triggerReducer} from "./slices";


const store = configureStore({
    reducer: {
        cars: carsReducer,
        trigger: triggerReducer
    }
});

export {
    store
}
