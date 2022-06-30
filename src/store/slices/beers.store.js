import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { beerService } from '../../services/beer.service';


export const getBeers = createAsyncThunk('beer/getBeers', async (filterBy) => {
    const data = await beerService.query(filterBy);
    return data;
});

export const addToFavorites = createAsyncThunk('beer/addToFavorite', async (favoriteBeer) => {
    const res = await beerService.addToFavorites(favoriteBeer);
    return res;
});

export const getFavorites = createAsyncThunk('beer/getFavorites', async () => {
    const res = await beerService.getFavorites();
    return res;
});

export const removeFavorite = createAsyncThunk('beer/removeFavorite', async (favoriteId) => {
    const res = await beerService.removeFavorite(favoriteId);
    return res;
});

export const removeAllFavorites = createAsyncThunk('beer/removeAllFavorites', async () => {
    const res = await beerService.removeAllFavorites();
    return res;
});

export const updateFavoriteBeer = createAsyncThunk('beer/updateBeerRating', async (beer) => {
    const res = await beerService.updateFavoriteBeer(beer);
    return res;
});

const initialState = {
    beers: null,
    favoriteBeers: [],
    allRemovedStatus: false,
    addFavoriteStatus: ''
};


const beerSlice = createSlice({
    name: 'beer',
    initialState,
    reducers: {
        resetAllRemovedStatus: (state) => {
            state.allRemovedStatus = false;
        }

    },

    extraReducers: (builder) => {
        builder
            .addCase(getBeers.fulfilled, (state, { payload }) => {
                state.beers = payload;
            })
            .addCase(addToFavorites.fulfilled, (state, { payload }) => {
                state.favoriteBeers.push(payload);
            })
            .addCase(addToFavorites.rejected, (state, { payload }) => {
                state.addFavoriteStatus = payload;
            })
            .addCase(getFavorites.fulfilled, (state, { payload }) => {
                state.favoriteBeers = payload;
            })
            .addCase(removeFavorite.fulfilled, (state, { payload }) => {
                state.favoriteBeers = payload;
            })
            .addCase(removeAllFavorites.fulfilled, (state, { payload }) => {
                state.favoriteBeers = payload;
                state.allRemovedStatus = true;
            })
            .addCase(updateFavoriteBeer.fulfilled, (state, { payload }) => {
                state.favoriteBeers = payload;
            });
    }
});


export const beerState = (state) => state.beerStore;
export const { resetAllRemovedStatus } = beerSlice.actions;
export const beerReducer = beerSlice.reducer;