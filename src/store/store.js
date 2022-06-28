import { configureStore } from '@reduxjs/toolkit';
import { beerReducer } from './slices/beers.store';

export default configureStore({
  reducer: {
    beerStore: beerReducer,
  },
});
