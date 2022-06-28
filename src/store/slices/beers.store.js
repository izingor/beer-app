import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { beerService } from '../../services/beer.service';


export const getBeers = createAsyncThunk('beer/getBeers', async (filterBy) => {
    const data = await beerService.query(filterBy);
    return data
});


const initialState = {
    beers: null
};


const beerSlice = createSlice({
    name: 'beer',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(getBeers.fulfilled, (state, { payload }) => {
                state.beers = payload;
            });
    }
});


export const beerState = (state) => state.beerStore;
export const beerReducer = beerSlice.reducer;