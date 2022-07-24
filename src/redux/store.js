import { configureStore } from '@reduxjs/toolkit'
import gymsSlice from './reducers/gyms';
import gymsPlacesSlice from './reducers/gymsPlaces';

const store = configureStore({
  reducer: {
    gyms: gymsSlice,
    gym_place: gymsPlacesSlice
  },
});

export default store