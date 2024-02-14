/**
 * author : Sudeera Madushan
 * date : 2/14/2024
 * project : bigzkoop-test-front-end
 */
import { createSlice } from '@reduxjs/toolkit';

export const albumsSclice = createSlice({
    name: 'albums',
    initialState: [],
    reducers: {
        setAlbums: (state, action) => {
            return action.payload;
        },
    },
});

export const { setAlbums } = albumsSclice.actions;
