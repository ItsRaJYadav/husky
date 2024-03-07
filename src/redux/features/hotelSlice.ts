import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Hotel } from "@/types/hotelTypes";

import { getAllHotelsDetail } from "../services/hotelServices";


interface HotelState {
    data: Hotel[] | null;
    loading: boolean;
    error: string | null;
}

export const fetchHotelsDetail = createAsyncThunk("hotels/fetchHotelsDetails", async () => {
    return getAllHotelsDetail();
});

const initialState: HotelState = {
    data: null,
    loading: false,
    error: null,
};


const hotelSlice = createSlice({
    name: "hotel",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHotelsDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHotelsDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchHotelsDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.data = null;
            })

    },
});

export const selectHotelsData = (state: { hotel: HotelState }) => state?.hotel?.data;
export const selectHotelsLoading = (state: { hotel: HotelState }) => state?.hotel?.loading;
export const selectHotelsError = (state: { hotel: HotelState }) => state?.hotel?.error;

export default hotelSlice.reducer;