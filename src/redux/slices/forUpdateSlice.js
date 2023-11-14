import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    car: {}
};

const forUpdateSlice = createSlice({
    name: 'forUpdateSlice',
    initialState,
    reducers: {
        setUpdate: (state, action) => {
            const { car } = action.payload;
            state.car = car;
        }
    }
});

const { reducer: forUpdateReducer, actions } = forUpdateSlice;

const forUpdateAction = {
    ...actions
};

export {
    forUpdateAction,
    forUpdateReducer
};
