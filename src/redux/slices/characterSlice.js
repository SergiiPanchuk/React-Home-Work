import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeServices} from "../../services";

const initialState = {
    idOfCharacters: [],
    characters: [],
    errors: null,
    isLoading: null
};

const getByCharacterId = createAsyncThunk(
    'characterSlice/getByCharacterId',
    async (ids, thunkAPI) =>{
        try {
            const {data} = await episodeServices.getByCharacterId(ids);
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers:{
        setCharactersId: (state, action) => {
            state.idOfCharacters = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getByCharacterId.fulfilled, (state, action) => {
                state.characters= action.payload
                state.isLoading = false;
                state.errors = null;
            })
            .addCase(getByCharacterId.rejected, (state, action) => {
                state.errors = action.payload
                state.isLoading = false;
            })
            .addCase(getByCharacterId.pending, state => {
                state.isLoading = false
            })
})

const {reducer: characterReducer, actions} = characterSlice;

const characterAction = {
    ...actions,
    getByCharacterId
}

export {
    characterReducer,
    characterAction
}