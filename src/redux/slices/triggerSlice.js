import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    trigger: true
};

const triggerSlice = createSlice({
    name: 'triggerSlice',
    initialState,
    reducers: {
        setTrigger: (state, action) => {
            const {trigger} = action.payload;
            state.trigger = trigger
        }
    }
})

const {reducer: triggerReducer, actions} = triggerSlice;

const triggerAction = {
    ...actions
}

export {
    triggerReducer,
    triggerAction
}