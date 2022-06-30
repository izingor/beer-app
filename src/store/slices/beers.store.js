import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { beerService } from '../../services/beer.service';


export const getBeers = createAsyncThunk('beer/getBeers', async (params) => {
    const data = await beerService.query(params);

    return { params, data };
});

export const addToFavorites = createAsyncThunk('beer/addToFavorite', async (favoriteBeer) => {
    const data = await beerService.addToFavorites(favoriteBeer);
    return data;
});

export const getFavorites = createAsyncThunk('beer/getFavorites', async () => {
    const data = await beerService.getFavorites();
    return data;
});

export const removeFavorite = createAsyncThunk('beer/removeFavorite', async (favoriteId) => {
    const data = await beerService.removeFavorite(favoriteId);
    return data;
});

export const removeAllFavorites = createAsyncThunk('beer/removeAllFavorites', async () => {
    const data = await beerService.removeAllFavorites();
    return data;
});

export const updateFavoriteBeer = createAsyncThunk('beer/updateBeerRating', async (beer) => {
    const data = await beerService.updateFavoriteBeer(beer);
    return data;
});

const initialState = {
    beers: null,
    favoriteBeers: [],
    allRemovedStatus: false,
    addFavoriteStatus: '',
    queryParams: {
        page: 1,
        food: ''
    }
};


const beerSlice = createSlice({
    name: 'beer',
    initialState,
    reducers: {
        resetAllRemovedStatus: (state) => {
            state.allRemovedStatus = false;
        },
        setQueryParams: (state, payload) => {
            state.queryParams = payload;
        }

    },

    extraReducers: (builder) => {
        builder
            .addCase(getBeers.fulfilled, (state, { payload }) => {
                state.beers = payload.data;
                state.queryParams = payload.params;
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
export const { resetAllRemovedStatus, setQueryParams } = beerSlice.actions;
export const beerReducer = beerSlice.reducer;