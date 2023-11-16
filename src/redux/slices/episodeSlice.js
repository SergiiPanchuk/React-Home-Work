import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {episodeServices} from "../../services";

const initialState = {
    episodes: [],
    errors: null,
    isLoading: null,
    prev: null,
    next: null,
    idOfCharacters: [],
    characters: []
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

const getByCharacterId = createAsyncThunk(
    'episodeSlice/getByCharacterId',
    async (ids, thunkAPI) => {
        try {
            const {data} = await episodeServices.getByCharacterId(ids);
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)


const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {
        setCharactersId: (state, action) => {
            state.idOfCharacters = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.episodes = action.payload.results;
                state.prev = action.payload.info.prev;
                state.next = action.payload.info.next
            })
            .addCase(getByCharacterId.fulfilled, (state, action) => {
                state.characters = action.payload
            })
            .addMatcher(isFulfilled(getAll, getByCharacterId), state => {
                state.isLoading = false;
                state.errors = null;
            })
            .addMatcher(isRejected(getAll, getByCharacterId), (state, action) => {
                state.errors = action.payload
                state.isLoadin = false;
            })
            .addMatcher(isPending(getAll, getByCharacterId), state => {
                state.isLoadin = true;
            })

})

const {reducer: episodeReducer, actions} = episodeSlice;

const episodeAction = {
    ...actions,
    getAll,
    getByCharacterId
}

export {
    episodeReducer,
    episodeAction
}
