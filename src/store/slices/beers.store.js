import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { beerService } from '../../services/beer.service';


export const getBeers = createAsyncThunk('beer/getBeers', async (queryParams) => {
    const [beers, favoriteIds] = await Promise.all([beerService.query(queryParams), beerService.getFavoriteIds()]);
    return { queryParams, beers, favoriteIds };
});

export const addToFavorites = createAsyncThunk('beer/addToFavorite', async (favoriteBeer) => {
    const updatedFavorite = await beerService.addToFavorites(favoriteBeer);
    return updatedFavorite;
});

export const getFavorites = createAsyncThunk('beer/getFavorites', async () => {
    const favoriteBeers = await beerService.getFavorites();
    return favoriteBeers;
});

export const removeFavorite = createAsyncThunk('beer/removeFavorite', async (favoriteId) => {
    const updatedFavorites = await beerService.removeFavorite(favoriteId);
    const favoriteIds = await beerService.getFavoriteIds();
    return { updatedFavorites, favoriteIds };
});

export const removeAllFavorites = createAsyncThunk('beer/removeAllFavorites', async () => {
    const emptyFavorites = await beerService.removeAllFavorites();
    return emptyFavorites;
});

export const updateFavoriteBeer = createAsyncThunk('beer/updateBeerRating', async (beer) => {
    const updatedFavorite = await beerService.updateFavoriteBeer(beer);
    return updatedFavorite;
});

const initialState = {
    beers: null,
    favoriteBeers: [],
    favoriteIds: [],
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
                state.beers = payload.beers;
                state.queryParams = payload.queryParams;
                state.favoriteIds = payload.favoriteIds;
            })
            .addCase(addToFavorites.fulfilled, (state, { payload }) => {
                state.favoriteBeers.push(payload);
                state.favoriteIds.push(payload.id);
            })
            .addCase(addToFavorites.rejected, (state, { payload }) => {
                state.addFavoriteStatus = payload;
            })
            .addCase(getFavorites.fulfilled, (state, { payload }) => {
                state.favoriteBeers = payload;
            })
            .addCase(removeFavorite.fulfilled, (state, { payload }) => {
                state.favoriteBeers = payload.updatedFavorites;
                state.favoriteIds = payload.favoriteIds;
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