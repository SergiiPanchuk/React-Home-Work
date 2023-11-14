import {configureStore} from "@reduxjs/toolkit";

import {carsReducer, triggerReducer} from "./slices";
import {forUpdateReducer} from "./slices/forUpdateSlice";


const store = configureStore({
    reducer: {
        cars: carsReducer,
        trigger: triggerReducer,
        car: forUpdateReducer
    }
});

export {
    store
}
