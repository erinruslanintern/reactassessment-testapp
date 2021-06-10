import {configureStore} from '@reduxjs/toolkit';
import userSlice from './user';
import dataSlice from './data';

const store = configureStore(
{
    reducer:
    {
        user: userSlice.reducer,
        data: dataSlice.reducer
    }
});

export default store;