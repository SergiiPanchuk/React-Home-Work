import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {episodeServices} from "../../services";

const initialState = {
    episodes: [],
    errors: null,
    isLoading: null,
    prev: null,
    next: null,
}

const getAll = createAsyncThunk(
    'episodeSlice/getAll',
    async (page, thunkAPI) => {
        try {
            const {data} = await episodeServices.getEpisode(page);
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
//
// const getByCharacterId = createAsyncThunk(
//     'episodeSlice/getByCharacterId',
//     async (ids, thunkAPI) => {
//         try {
//             const {data} = await episodeServices.getByCharacterId(ids);
//             return thunkAPI.fulfillWithValue(data)
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.response.data)
//         }
//     }
// )


const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.episodes = action.payload.results;
                state.isLoading = false;
                state.errors = null;
                state.prev = action.payload.info.prev;
                state.next = action.payload.info.next
            })
            // .addCase(getByCharacterId.fulfilled, (state, action) => {
            //     state.characters = action.payload
            // })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
                state.isLoading = false;
            })
            .addCase(getAll.pending, state => {
                state.isLoading = true;
            })

})

const {reducer: episodeReducer, actions} = episodeSlice;

const episodeAction = {
    ...actions,
    getAll,
    // getByCharacterId
}

export {
    episodeReducer,
    episodeAction
}
