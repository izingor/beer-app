import axios from 'axios';
import { asyncStorageService } from './async.storage.service';

const BEER_DB = 'beerDB';

export const beerService = {
    query,
    addToFavorites,
    getFavorites,
    removeFavorite,
    removeAllFavorites,
    updateFavoriteBeer
};

async function query(filterBy = null) {
    const page = filterBy?.page ? filterBy.page : '1';
    const food = filterBy?.food ? `&food=${filterBy.food}` : '';

    try {
        const res = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=9${food}`);
        return res.data;
    } catch (err) {
        console.log('Had an error while getting you beers', err);
    }

}

async function addToFavorites(beer) {
    try {
        const favoriteBeer = await asyncStorageService.get(BEER_DB, beer.id);
        if (favoriteBeer) {
            return Promise.reject('exists');
        } else {
            const updatedFavorites = await asyncStorageService.post(BEER_DB, beer);
            return updatedFavorites;
        }
    } catch (err) {
        console.log('Had an error while adding your beer to favorites', err);
    }
}

async function removeFavorite(favoriteId) {
    try {
        const updatedFavorites = await asyncStorageService.remove(BEER_DB, favoriteId);
        return updatedFavorites;
    } catch (err) {
        console.log('Had an error while removing your favorite', err);
    }
}

async function getFavorites() {
    try {
        const favoriteBeers = await asyncStorageService.query(BEER_DB);
        return favoriteBeers;
    } catch (err) {
        console.log('Had an error while getting your favorite beers', err);
    }
}

async function removeAllFavorites() {
    try {
        const updatedFavorites = await asyncStorageService.removeAll();
        return updatedFavorites;
    } catch (err) {
        console.log('Had an error while removing the local storage', err);
    }
}

async function updateFavoriteBeer(beer) {
    try {
        const updatedBeer = await asyncStorageService.put(BEER_DB, beer);
        return updatedBeer;
    } catch (err) {
        console.log('Had an error while updating your beer', err);
    }
}