import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cars: [],
    trigger: true,
    car: {}
};
const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setResponse: (state, action) => {
            const {cars} = action.payload;
            state.cars = cars
        },
        setTrigger: (state, action) => {
            const {trigger} = action.payload;
            state.trigger = trigger
        },
        setUpdate: (state, action) => {
            const { car } = action.payload;
            state.car = car;
        }
    }
});


const {reducer: carsReducer, actions} = carsSlice;

const carsActions = {
    ...actions
}

export {
    carsReducer,
    carsActions
}

