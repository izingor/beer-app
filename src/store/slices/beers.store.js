import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { beerService } from '../../services/beer.service';


export const getBeers = createAsyncThunk('beer/getBeers', async (filterBy) => {
    const data = await beerService.query(filterBy);
    return data;
});

export const addToFavorites = createAsyncThunk('beer/addToFavorite', async (favoriteBeer) => {
    const res = await beerService.addToFavorites(favoriteBeer);
    // console.log(res);
    return res;
});

export const getFavorites = createAsyncThunk('beer/getFavorites', async () => {
    console.log('getting your favorites')
    const res = await beerService.getFavorites();
    return res;
});

const initialState = {
    beers: null,
    favoriteBeers: null,
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
            })
            .addCase(addToFavorites.fulfilled, (state, { payload }) => {
                state.favoriteBeers = payload;
            })
            .addCase(getFavorites.fulfilled, (state, { payload }) => {
                state.favoriteBeers = payload;
            });
    }
});


export const beerState = (state) => state.beerStore;
export const beerReducer = beerSlice.reducer;