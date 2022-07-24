import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGymByPlaces } from "../../api/gyms"

export const fetchGymPlaces = createAsyncThunk("gyms/places", async() => {
    try {
        const res = await fetchGymByPlaces()
        return { data: res }
    }
    catch (err) {
        return { error: "Error while fetching data" }
    }
})


const initialState = {
    data: {},
    loading: false,
    error: ""
}

const gymsPlacesSlice = createSlice({
    name: "gym_places",
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchGymPlaces.pending]: (state) => {
            state.loading = true
        },
        [fetchGymPlaces.rejected]: (state, action) => {
            state.loading = false
            state.error = "Error while fetching data"
        },
        [fetchGymPlaces.fulfilled]: (state, action) => {
            state.loading = false
            if (action.payload.data) {
                state.data = action.payload.data
            }
            else if (action.payload.error) {
                state.error = action.payload.error
            }
        },
    }
})


export default gymsPlacesSlice.reducer