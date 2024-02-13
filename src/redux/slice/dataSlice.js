/**
 * author : Sudeera Madushan
 * date : 2/13/2024
 * project : bigzkoop-test-front-end
 */
import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
    name: 'data',
    initialState: [],
    reducers: {
        setData: (state, action) => {
            return action.payload;
        },
    },
});

export const { setData } = dataSlice.actions;
