import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGymByCoordinates } from "../../api/gyms";


export const fetchGymCoords = createAsyncThunk("gyms/fetchall", async (c) => {
    try {
        const res = await fetchGymByCoordinates(c.lat, c.long)
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

const gymsSlice = createSlice({
    name: "gyms",
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchGymCoords.pending]: (state) => {
            state.loading = true
        },
        [fetchGymCoords.rejected]: (state, action) => {
            state.loading = false
            state.error = "Error while fetching data"
        },
        [fetchGymCoords.fulfilled]: (state, action) => {
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


export default gymsSlice.reducer